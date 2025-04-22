
# Email Integration Setup

To enable the contact form functionality on your portfolio website, you'll need to set up EmailJS:

1. **Sign up for EmailJS**: 
   - Visit [EmailJS](https://www.emailjs.com/) and create an account
   - The free tier allows 200 emails per month

2. **Create a Service**:
   - Connect to your email provider (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an Email Template**:
   - Design a template with variables like `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}`
   - Make sure to include `{{to_email}}` if you want to specify the recipient in the code
   - Note down the Template ID

4. **Update the Contact Component**:
   - Open `src/components/contact-section.tsx`
   - Replace the placeholders:
     ```jsx
     await emailjs.send(
       "service_id", // Replace with your EmailJS service ID
       "template_id", // Replace with your EmailJS template ID
       {
         from_name: formData.name,
         from_email: formData.email,
         subject: formData.subject,
         message: formData.message,
         to_email: "ak.work002@gmail.com"
       },
       "user_id" // Replace with your EmailJS user ID
     );
     ```
   - Your User ID can be found in your EmailJS dashboard under "Account" → "API Keys"

5. **Test the Form**:
   - Submit a test message through the contact form
   - Check that you receive the email at your specified address

For more information, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).
