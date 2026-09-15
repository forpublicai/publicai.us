import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(url);
}

let ensured = false;

export async function ensureLoiTable() {
  if (ensured) return;
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS loi_submissions (
      id SERIAL PRIMARY KEY,
      organization TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      org_kind TEXT NOT NULL,
      location TEXT,
      in_maine BOOLEAN NOT NULL DEFAULT FALSE,
      compute_unit TEXT NOT NULL,
      compute_amount TEXT,
      compute_scale TEXT,
      organic_premium_pct INTEGER NOT NULL,
      needed_by TEXT,
      needed_by_note TEXT,
      comments TEXT,
      non_binding_ack BOOLEAN NOT NULL,
      fundraising_ref BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  ensured = true;
}
