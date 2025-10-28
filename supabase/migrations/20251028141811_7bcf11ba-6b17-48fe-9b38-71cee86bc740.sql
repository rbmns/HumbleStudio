-- Drop all existing SELECT policies on contact_submissions
DROP POLICY IF EXISTS "Allow authenticated users to view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;

-- Create a new policy that only allows admins to view contact submissions
CREATE POLICY "Only admins can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (is_admin(auth.uid()));

-- Keep the INSERT policies for public form submissions (they're fine)
-- These already exist and allow anyone to submit contact forms