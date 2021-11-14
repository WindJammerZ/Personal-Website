uniform vec3 uColor;
uniform float uTime;
uniform float uMaxDepth;
uniform vec2 uSpeed;
uniform vec2 uGridDivisions;

varying vec2 vUv;

void main() {

    //speed of vertical movement
    float v_speed = 0.5;
    //speed of horizontal movement
    float h_speed = 0.0;

    //horizontal line thickness
    float h_thickness = 0.075;

    //vertical line thickness
    float v_thickness = 0.075;

    //vec[0] position is verticle divisions - even gives middle line, odd gives middle block
    //vec[1] position is horizontal divisions
    vec2 divisions = vec2(18.91, 8.0);

    float strength = step(1.0 - h_thickness, fract(vUv.x * divisions.x - uTime * h_speed));
    strength += step(1.0 - v_thickness, fract(vUv.y * divisions.y - uTime * v_speed));
    strength = clamp(strength, 0.0, 1.0);
    

    vec3 blackColor = vec3(0.0);
    vec3 visibleColor = uColor;

    vec3 color = mix(blackColor, visibleColor, strength);

    //set top bar
    color += step(-.015, -vUv.y) * visibleColor;

    color *= clamp(0.0, 1.0, (1.0 - vUv.y) * 3.75);
    
    float alpha = 1.0;

    gl_FragColor = vec4(color, alpha);

}