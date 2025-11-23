'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown, Send } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { toast } from 'sonner'
import { Spinner } from './ui/spinner'

type FeedbackType = 'positive' | 'negative' | null

interface FeedbackProps {
  contentType: string
  contentId?: string
  question?: string
  positiveTitle?: string
  positiveDescription?: string
  negativeTitle?: string
  negativeDescription?: string
  positiveSuccessMessage?: string
  negativeSuccessMessage?: string
  metadata?: Record<string, any>
}

const Feedback = ({
  contentType,
  contentId,
  question = 'Was this helpful?',
  positiveTitle = 'Great! Tell us what worked well',
  positiveDescription = 'What aspects were most helpful? Your input helps us maintain our quality.',
  negativeTitle = "We'd love to improve",
  negativeDescription = 'What could we do better? Your feedback helps us improve the experience.',
  positiveSuccessMessage = "We're glad we could help. We'll keep up the good work!",
  negativeSuccessMessage = "Thanks for helping us improve. We'll work on making things better!",
  metadata = {},
}: FeedbackProps) => {
  const [open, setOpen] = useState(false)
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null)
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleFeedbackClick = (type: FeedbackType) => {
    setFeedbackType(type)
    setOpen(true)
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback_type: feedbackType,
          content_type: contentType,
          content_id: contentId || null,
          message: message.trim() || null,
          page_url: window.location.href,
          metadata: metadata,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit feedback')
      }

      if (feedbackType === 'positive') {
        toast.success('Thank you for your feedback! 🎉', {
          description: positiveSuccessMessage,
        })
      } else {
        toast.success('Feedback received! 💙', {
          description: negativeSuccessMessage,
        })
      }

      setHasSubmitted(true)
      setMessage('')
      setOpen(false)
    } catch (error) {
      console.error('Feedback submission error:', error)
      toast.error('Submission Failed', {
        description:
          error instanceof Error ? error.message : 'Could not submit feedback. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setMessage('')
  }

  if (hasSubmitted) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-1 border border-gray-4 rounded-lg">
        <span className="text-xs text-gray-10">Thanks for your feedback!</span>
      </div>
    )
  }

  return (
    <>
      <div className="inline-flex items-center gap-2 px-2 py-2 bg-gray-1 border border-gray-8 rounded-lg">
        <span className="text-xs text-gray-10">{question}</span>
        <Button
          onClick={() => handleFeedbackClick('positive')}
          className="p-1 hover:bg-gray-3 rounded transition-colors"
          aria-label="Yes, this was helpful"
          size="icon-sm"
          variant="ghost"
        >
          <ThumbsUp size={14} className="text-gray-9" />
        </Button>
        <Button
          onClick={() => handleFeedbackClick('negative')}
          className="p-1 hover:bg-gray-3 rounded transition-colors"
          aria-label="No, this was not helpful"
          size="icon-sm"
          variant="ghost"
        >
          <ThumbsDown size={14} className="text-gray-9" />
        </Button>
      </div>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="font-inter">
          <DialogHeader>
            <DialogTitle>{feedbackType === 'positive' ? positiveTitle : negativeTitle}</DialogTitle>
            <DialogDescription>
              {feedbackType === 'positive' ? positiveDescription : negativeDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="feedback-message" className="text-gray-12">
                Your feedback <span className="text-gray-10 text-xs">(optional)</span>
              </Label>
              <Textarea
                id="feedback-message"
                placeholder={
                  feedbackType === 'positive'
                    ? 'Tell us what you liked...'
                    : 'Tell us what we can improve...'
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={handleClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  Submitting...
                </>
              ) : (
                <>
                  <Send />
                  Submit Feedback
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Feedback
