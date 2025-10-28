-- Drop the insecure policy that uses headers for authentication
DROP POLICY IF EXISTS "Users can view own submissions" ON public.cv_submissions;

-- Create a secure policy that restricts viewing CV submissions to admins only
CREATE POLICY "Only admins can view CV submissions"
ON public.cv_submissions
FOR SELECT
TO authenticated
USING (is_admin(auth.uid()));