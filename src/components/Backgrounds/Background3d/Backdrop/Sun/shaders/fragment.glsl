uniform vec2 uResolution;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

vec3 yellow_color = vec3(0.3216, 0.1569, 0.0039);
vec3 purple_color = vec3(0.1569, 0.0, 0.3137);

void main() {
    float speed = 0.25;
    float segment_narrowness = 2.;
    float segment_blend_start = 0.48; //must be less than segment_coverage_pct
    float segment_coverage_pct = 0.62;

    float elevation = vElevation - fract(uTime * speed);

    vec3 pct = vec3(smoothstep(segment_blend_start,segment_coverage_pct,1.0 - clamp(vUv.y, 0.0, 1.0)));
    vec3 color = mix(yellow_color, purple_color, pct);

    float alpha = step(segment_coverage_pct, vUv.y) + step(0.15 * (1.25 - clamp(0.0, 1.0, vElevation)), abs(fract(elevation * segment_narrowness)) + 0.05);

    gl_FragColor = vec4(color, alpha);

}