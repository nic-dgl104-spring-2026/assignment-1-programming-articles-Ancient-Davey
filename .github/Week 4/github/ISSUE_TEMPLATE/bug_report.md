# Login form rejects valid email addresses containing “+” character

## Steps to Reproduce:
1. Navigate to /login.
2. Enter an email address containing a plus sign (e.g. dibya+test@nic.bc.ca).
3. Enter a valid password and attempt to submit the form.

## The Expected Behaviour
The login form should accept valid email addresses, including those containing a “+” character, and submit the request successfully so the user can log in.

## Actual Behaviour
- The form displays the error message “Invalid email format” and does not submit.
- No network request is sent from the browser when the form is submitted.

## Environment
OS: Windows 11, macOS
Browser: Chrome 124, Firefox 125
App version: v2.4.1
User role (if relevant): Any user attempting login

## Severity
High -- Blocks the core funtionality

## Workaround
Users can remove the “+” portion of their email address (e.g. use dibya@nic.bc.ca instead of dibya+test@nic.bc.ca) to successfully log in.

## Suggested fix (optional)
The issue is likely caused by overly strict client-side email validation. Update the validation logic (regex or input rules) to allow “+” characters, as they are valid under RFC 5321.
