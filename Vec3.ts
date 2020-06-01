export class Vec3 {

	public x : f32 = 0;
	public y : f32 = 0;
	public z : f32 = 0;

	public set( x : f32, y : f32, z : f32 ) : Vec3 {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	};

	public add( v : Vec3 ) : Vec3 {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	};

	public sub( v : Vec3 ) : Vec3 {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	};

	public mul( v : Vec3 ) : Vec3 {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	};

	public div( v : Vec3 ) : Vec3 {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	};

	public dot( v : Vec3 ) : f32 {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	};

	public scale( scalar : f32 ) : Vec3 {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	};

	public mag() : f32 {

		return Mathf.hypot( this.x, this.y, this.z );

	};

	public distanceSq() : f32 {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	};

};
