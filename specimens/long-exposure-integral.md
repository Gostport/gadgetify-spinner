Let S(x,y) ∈ {0,1}      = static mask  (1 on STATIC_ANCHOR)
    v(x,y) ∈ R²         = velocity field of MOVING_ELEMENTS  (0 where S=1)
    L(x,y,t)            = scene radiance at instant t
    ND ≥ 1              = neutral-density factor from CAPTURE_MEDIUM
    τ                   = clip threshold (sensor full-well)

THE FRAME (one shutter speed T = DURATION governs ALL of it):

             ⎡ S·L_static(x,y)
             ⎢     ← anchor: integrand constant in t
             ⎢       ⇒ after /T → L_static, PSF=δ   (E3)
             ⎢ + (1−S) · ∫₀ᵀ L(x − vₓt, y − v_y t, t) dt
  I(x,y)     ⎢     ← movers: smeared along v over T   (E1)
   = ─────── ⎢ + ambient·T
  ND · T     ⎢     ← night brighter than eye   (E2)
             ⎣                                          ⎤
             + η(x,y)          ← hot-pixels             ⎥ clip₀^τ
             + blown-core bloom + ε_vib                 ⎦

Derived consequences (read straight off the integral — NOT painted by hand):
• point light p(t) with intensity >> τ  ⇒  ∫ draws a CONTINUOUS curve;
  peak clips → white core,  coloured halo =
  trailColor(v·view) ∈ {Red receding, White/Amber approaching}   (E2)
• small fast object (pedestrian), ‖v‖T >> size  ⇒  its energy spreads
  thin  ⇒  GHOST/ABSENT   (E1)
• water, ‖v‖T large & turbulent  ⇒  veil = SILKY ;
  cloud, v=wind  ⇒  STREAK(wind_dir)   (E1)

Consistency test (E1 as a scalar equality):
  T̂_water = |∇⁻¹ blur(water)| / ‖v_water‖ ,
  T̂_cloud = len(streak) / ‖v_wind‖ ,
  T̂_trail = len(trail) / ‖v_car‖
  HONEST    ⟺ |T̂_water − T̂_cloud| + |T̂_cloud − T̂_trail| < ε
              -- one T explains every blur
  FORBIDDEN ⟺ ∃ class with T̂ ≈ 0 while another T̂ = T
              -- a frozen thing inside a long exposure
