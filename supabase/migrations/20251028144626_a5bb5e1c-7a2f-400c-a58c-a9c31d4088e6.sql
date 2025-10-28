-- Drop the dangerous policies that allow unrestricted access
DROP POLICY IF EXISTS "Allow all operations on case_studies" ON public.case_studies;
DROP POLICY IF EXISTS "Allow authenticated users to manage case studies" ON public.case_studies;

-- Keep public read access for published case studies (this policy should already exist)
-- "Anyone can view published case studies" - already exists, no need to recreate

-- Add restricted write policies - only admins can create, update, or delete case studies
CREATE POLICY "Only admins can insert case studies"
ON public.case_studies
FOR INSERT
TO authenticated
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Only admins can update case studies"
ON public.case_studies
FOR UPDATE
TO authenticated
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Only admins can delete case studies"
ON public.case_studies
FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));