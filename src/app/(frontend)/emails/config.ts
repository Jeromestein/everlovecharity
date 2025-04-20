/**
 * @description Email Config
 */

export interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  cc?: string | string[]
  bcc?: string | string[]
}
