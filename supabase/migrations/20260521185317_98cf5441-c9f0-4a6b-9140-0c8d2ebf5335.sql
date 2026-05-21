
-- Bookings table for public submission
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_ref TEXT UNIQUE NOT NULL DEFAULT ('KCS-' || lpad((floor(random()*100000))::text, 5, '0')),
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  address TEXT NOT NULL,
  distance_mi INTEGER,
  preferred_date DATE,
  time_slot TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  price_estimate NUMERIC(8,2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a booking (public contact form)
CREATE POLICY "Anyone can create a booking"
ON public.bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No public reads — only admins (configured later) can read
-- (No SELECT policy = no reads allowed by default)
