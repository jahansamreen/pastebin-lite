-- Create pastes table
CREATE TABLE IF NOT EXISTS pastes (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  max_views INTEGER,
  view_count INTEGER DEFAULT 0
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_pastes_id ON pastes(id);
CREATE INDEX IF NOT EXISTS idx_pastes_expires_at ON pastes(expires_at);
