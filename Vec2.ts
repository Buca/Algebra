export class Vec2 {

	public x : f32 = 0;
	public y : f32 = 0;

	public set( x : f32, y : f32 ) : Vec2 {

		this.x = x;
		this.y = y;

		return this;

	};

	public add( v : Vec2 ) : Vec2 {

		this.x += v.x;
		this.y += v.y;

		return this;

	};

	public sub( v : Vec2 ) : Vec2 {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	};

	public mul( v : Vec2 ) : Vec2 {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	};

	public div( v : Vec2 ) : Vec2 {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	};

	public dot( v : Vec2 ) : f32 {

		return this.x * v.x + this.y * v.y;

	};

	public scale( scalar : f32 ) : Vec2 {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	};

	public mag() : f32 {

		return Mathf.hypot( this.x, this.y );

	};

	public distanceSq() : f32 {

		return this.x * this.x + this.y * this.y;

	};

};
