'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { resendEmail } from '@/app/(frontend)/emails/actions'
import { useState } from 'react'

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  reason: z.string({
    required_error: 'Please select a reason for contact.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
})

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      reason: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Build email content
      const htmlContent = `
        <h2>Everlove Charity - New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${values.firstName} ${values.lastName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Reason:</strong> ${values.reason}</p>
        <p><strong>Message:</strong></p>
        <p>${values.message.replace(/\n/g, '<br>')}</p>
      `

      // Send email
      await resendEmail({
        to: values.email, // Use environment variable or default value
        subject: `Everlove Charity - Contact Form: ${values.firstName} ${values.lastName} - ${values.reason}`,
        html: htmlContent,
      })

      // Success message
      toast.success('Message sent successfully!', {
        description: 'We will get back to you soon.',
      })

      // Reset form
      form.reset()
    } catch (error) {
      console.error('Sending email failed:', error)
      toast.error('Sending failed', {
        description: 'An error occurred while sending the message. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-xl border p-6 shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First Name <span className="text-xs text-red-500"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last Name <span className="text-xs text-red-500"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-xs text-red-500"> *</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Reason <span className="text-xs text-red-500"> *</span>
                </FormLabel>
                <FormDescription>
                  Help us better serve you by choosing one of the following:
                </FormDescription>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">General Questions</SelectItem>
                    <SelectItem value="fundraise">Fundraise</SelectItem>
                    <SelectItem value="volunteer">Volunteer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message
                  <span className="text-xs text-red-500"> *</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please share your comments, questions, and ideas with us."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
