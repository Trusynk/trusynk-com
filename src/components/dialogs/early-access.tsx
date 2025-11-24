'use client'

import { useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import z from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LinkP, P } from '../typography'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Spinner } from '../ui/spinner'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const allowedChars = /^[a-zA-Z ]+$/

const formSchema = z.object({
  name: z
    .string()
    .min(3, { error: 'Min. 3 characters' })
    .max(255, { error: 'Max. 255 characters' })
    .regex(allowedChars, { error: 'Only letters and spaces are allowed' }),
  email: z
    .email({ error: 'Invalid email address' })
    .min(7, { error: 'Min. 7 characters' })
    .max(255, 'Max. 255 characters'),
  isChecked: z.boolean().refine((val) => val === true, {
    error: 'You must accept the privacy policy',
  }),
})

const EarlyAccess = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      isChecked: false,
    },
    mode: 'onChange',
  })

  const isFormValid = form.formState.isValid

  const submitForm = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true)

      const { data: existingUser, error: checkError } = await supabase
        .from('early_access_forms')
        .select('email')
        .eq('email', data.email)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError
      }

      if (existingUser) {
        toast.error('Already Registered! 🎉', {
          description: "You're already on the list! Check your email for updates.",
        })
        return
      }

      const { error: insertError } = await supabase.from('early_access_forms').insert({
        name: data.name,
        email: data.email,
        is_checked: data.isChecked,
      })

      if (insertError && insertError.code === '23505') {
        toast.error("You're email were on the list", {
          description: 'Check your email for updates.',
        })
        throw insertError
      }

      toast.success("You're in! Early access secured. 🚀", {
        description: "Thanks — you're in. Follow us on LinkedIn for updates. Big things coming.",
      })

      const firstName = data.name.split(' ')[0]

      form.reset()
      setTimeout(() => {
        setOpen(false)
        router.push(`/welcome?name=${encodeURIComponent(firstName)}`)
      }, 1500)
    } catch (error: any) {
      let errorMessage = 'Submission failed. Please try again later.'

      if (error?.message?.includes('duplicate') || error?.code === '23505') {
        errorMessage = 'This email is already registered!'
      } else if (error?.message?.includes('network')) {
        errorMessage = 'Network error. Please check your connection.'
      }

      toast.error('Submission Failed', {
        description: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Join Early Access</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Level up your networking game - Join our Early Access program!
            </DialogTitle>
            <DialogDescription>
              Unlock new networking opportunities by joining our Early Access program. Spot limited!
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              id="early-access-form"
              onSubmit={form.handleSubmit(submitForm)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="capitalize">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Andrew Virya Victorio" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="capitalize">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="andrew@trusynk.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="isChecked"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start align-middle justify-start gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="accept-privacy-policy"
                        defaultChecked
                      />
                    </FormControl>
                    <div className="grid gap-2">
                      <Label htmlFor="accept-privacy-policy" className="text-brand-10 text-xs">
                        Accept Privacy Policy
                      </Label>
                      <P className="text-xs text-gray-10">
                        I agree to receive emails from Trusynk and accept the{' '}
                        <LinkP className="text-xs" href="/privacy-policy">
                          Privacy Policy.
                        </LinkP>
                      </P>
                    </div>
                  </FormItem>
                )}
              />
              <FormMessage>{form.formState.errors.isChecked?.message}</FormMessage>
            </form>
          </Form>
          <DialogFooter>
            <Button
              type="submit"
              form="early-access-form"
              disabled={!isFormValid || isLoading}
              className="disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Securing your spot… just a sec.</span>
                </>
              ) : (
                'Sign Me Up'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EarlyAccess
