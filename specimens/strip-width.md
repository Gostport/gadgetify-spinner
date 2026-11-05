def __init__(self, subject="{{TOPIC}}"):
        self.subject = subject
        self.flow = self.__analyze_flow__()
        self.sculpture = self.__build__()

    def __analyze_flow__(self):
        theta = edge_direction_field(self.subject)   # edge tangent angles
        kappa = curvature_field(self.subject)        # curvature magnitude
        F = gradient(theta)                          # streamline vector field
        return {
            'theta': theta,
            'kappa': kappa,
            'F': F,
            'curl': curl(F),
            'div': divergence(F)
        }

    def __coil__(self, streamline, tier):
        radius = 1.0 / max(abs(curvature(streamline)), EPS)
        tightness = map_range(abs(curl(streamline)), 0, 1, 'loose', 'tight')
        coil = QuillCoil(
            centerline=streamline,
            radius=radius,
            tightness=tightness,
            tier=tier,
            width=STRIP_WIDTH[tier],
            material='dyed paper, satin finish, fibrous edge',
            tip='gilded' if is_terminal(streamline) else None
        )
        # recursion: nested coils aligned to the same local flow
        if tier < MAX_TIER and can_nest(coil):
            coil.children = [self.__coil__(sub, tier + 1)
                             for sub in sub_streamlines(streamline, n=random.randint(2, 4))]
        return coil

    def __build__(self):
        s = Sculpture(subject=self.subject)
        s.silhouette = infer_silhouette(self.subject)
        s.coils = [self.__coil__(sl, tier=0) for sl in streamlines(self.flow['F'])]
        s.recursion_rule = 'large coils contain 2–4 smaller nested coils, same flow alignment'
        s. support = 'shallow white plinth, no visible armature'
        s. lighting = {
            'gi': 'global illumination with soft top fill',
            'key': 'hard raking light ~20° above horizon, direction aligned to F',
            'goal': 'micro-relief on every coil edge and paper fiber'
        }
        s. camera = {'aperture': 'f/1.8', 'dof': 'shallow',
                    'focus': 'nearest coil edge cluster; fibers resolved'}
        s.negative = ['wire armature', 'plastic', 'glossy resin', 'painted illustration',
                      'flat 2D', '3D render sheen', 'blurred paper fibers', 'random coils off-flow']
        return s

    def render(self):
        return generate_image(self.sculpture)

exec(FlowStripQuilling().render())
