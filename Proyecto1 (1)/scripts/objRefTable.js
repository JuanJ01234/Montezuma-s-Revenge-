const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.jumpthru,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Platform.Cnds.IsFalling
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Sprite: 0},
	{Plataforma: 0},
	{SaltoATravés: 0},
	{DesplazarHasta: 0},
	{Sprite2: 0},
	{FondoEnMosaico: 0},
	{Teclado: 0},
	{Sprite3: 0},
	{FondoEnMosaico2: 0},
	{Moneda: 0},
	{Sprite4: 0},
	{BlastZone: 0},
	{Sprite5: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	FondoEnMosaico2: class extends self.ITiledBackgroundInstance {},
	Moneda: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	BlastZone: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {}
}