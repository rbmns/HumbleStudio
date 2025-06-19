
-- First, let's check what data exists in the projects table
SELECT id, title, categories, is_featured, is_coming_soon, link FROM projects LIMIT 10;

-- Check what data exists in projects_media table
SELECT * FROM projects_media LIMIT 10;

-- Check if there are any orphaned media records (media without corresponding projects)
SELECT pm.* FROM projects_media pm 
LEFT JOIN projects p ON pm.project_id = p.id 
WHERE p.id IS NULL;

-- Check if there are projects without media
SELECT p.id, p.title, COUNT(pm.id) as media_count 
FROM projects p 
LEFT JOIN projects_media pm ON p.id = pm.project_id 
GROUP BY p.id, p.title 
ORDER BY media_count;

-- Add some sample media data for existing projects (if the projects_media table is empty)
-- This will add placeholder images for projects that don't have media
INSERT INTO projects_media (project_id, media_url, alt_text, is_primary, media_type, display_order)
SELECT 
  p.id,
  CASE 
    WHEN p.title ILIKE '%nonna%' THEN 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop'
    WHEN p.title ILIKE '%digital%resume%' OR p.title ILIKE '%cv%' THEN 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop'
    WHEN p.title ILIKE '%taxi%' OR p.title ILIKE '%tour%' THEN 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
    ELSE 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  END as media_url,
  CASE 
    WHEN p.title ILIKE '%nonna%' THEN 'Nonna''s Table restaurant website'
    WHEN p.title ILIKE '%digital%resume%' OR p.title ILIKE '%cv%' THEN 'Digital resume website'
    WHEN p.title ILIKE '%taxi%' OR p.title ILIKE '%tour%' THEN 'Taxi and tours website'
    ELSE CONCAT(p.title, ' project preview')
  END as alt_text,
  true as is_primary,
  'image' as media_type,
  1 as display_order
FROM projects p
WHERE NOT EXISTS (
  SELECT 1 FROM projects_media pm WHERE pm.project_id = p.id
)
AND p.is_coming_soon = false;

-- Ensure categories are properly formatted as arrays for projects that might have null categories
UPDATE projects 
SET categories = CASE 
  WHEN categories IS NULL OR categories = '{}' THEN 
    CASE 
      WHEN title ILIKE '%nonna%' THEN ARRAY['ecommerce']
      WHEN title ILIKE '%digital%resume%' OR title ILIKE '%cv%' THEN ARRAY['web']
      WHEN title ILIKE '%taxi%' OR title ILIKE '%tour%' THEN ARRAY['web']
      ELSE ARRAY['web']
    END
  ELSE categories
END
WHERE categories IS NULL OR categories = '{}';
