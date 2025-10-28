-- Drop the overly permissive public SELECT policy on profiles table
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON public.profiles;

-- Create a restricted SELECT policy where users can only view their own profile
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);