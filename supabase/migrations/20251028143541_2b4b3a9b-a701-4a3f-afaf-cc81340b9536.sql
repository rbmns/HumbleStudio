-- Set The Lineup as the featured project
UPDATE projects
SET is_featured = true
WHERE slug = 'the-lineup' OR title ILIKE '%lineup%';

-- Unfeature other projects to ensure The Lineup is the only featured one
UPDATE projects
SET is_featured = false
WHERE slug != 'the-lineup' AND title NOT ILIKE '%lineup%';