


var basic_fs_text = `
#version 300 es
// #version 300 es
// precision highp float;
// precision highp int;

// uniform float time;
// uniform int alive;

// in vec2 v_pos;

// out vec4 FragColor;

// vec4 measureFloat(float measure_number_float){
//     return vec4(
//         float( mod ( measure_number_float, 60.0 ) ) / 60.0,
//         float( mod ( measure_number_float, 3600.0 ) ) / (60.0 * 60.0),
//         float( mod ( measure_number_float, 216000.0 ) ) / (60.0 * 60.0 * 60.0),
//         1.0
//     );
// }

// vec4 measureInt( int measure_number_int ){
//     return vec4(
//         float( measure_number_int % 60 ) / 60.0,
//         float( measure_number_int % 3600 ) / (60.0 * 60.0),
//         float( measure_number_int % 216000 ) / (60.0 * 60.0 * 60.0),
//         1.0
//     );
// }

// vec4 sampleColor(){

//     int x_coord_i, y_coord_i = 0;
//     float x_coord_f, y_coord_f = 0.0;

//     float res_mul_x_f = 20.0; // mul = multiplier
//     float res_mul_y_f = 20.0; // mul = multiplier

//     x_coord_i = int(v_pos.x * res_mul_x_f);
//     y_coord_i = int(v_pos.y * res_mul_y_f);

//     // dvec4 doublevec;

//     // return back to float:
//     x_coord_f = float(x_coord_i) / res_mul_x_f;
//     y_coord_f = float(y_coord_i) / res_mul_y_f;

//     int cell_number = y_coord_i * int(res_mul_x_f) + x_coord_i;

//     // return measureInt(cell_number);
    
//     if (alive == 1) {
//         return vec4(0.0, 0.0, 1.0, 1.0);
//     }
//     else {
//         return vec4(0.0, 1.0, 0.0, 1.0);
//     }

//     // return vec4(1.0, 1.0, 0.0, 1.0);
    
//     // return measureFloat(float(cell_number));

// }

// void main(void) {

//     FragColor = sampleColor();

// }

precision highp float;
precision highp int;

in vec2 v_pos;
out vec4 FragColor;

uniform int alive;
uniform float time;

vec4 sampleColor(){
    if (alive == 1) {
        return vec4(0.0, 0.0, 1.0, 1.0);
    }
    else {
        return vec4(0.0, 1.0, 0.0, 1.0);
    }
}

void main(void) {

    // if (alive == 1) {
    //     FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    // }
    // else {
    //     FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    // }

    FragColor = sampleColor();

}







































// vec4 gammaFilter(vec4 inputt, float gamma){
//     inputt.x = pow(inputt.x, 1.0/gamma);
//     inputt.y = pow(inputt.y, 1.0/gamma);
//     inputt.z = pow(inputt.z, 1.0/gamma);

//     return inputt;
// }

// vec4 measureFloat(float measure_number_float){
//     return vec4(float(mod(measure_number_float, 60.0)) / 60.0, float( mod( measure_number_float, 3600.0 ) / 60.0 / 60.0 ), float( mod ( measure_number_float , 60.0 * 3600.0 ) /60.0 / 60.0 / 60.0 ), 1.0);
// }

// vec4 sampleColor(){

//     int outer_x_coord_i, outer_y_coord_i = 0;
//     float outer_x_coord_f, outer_y_coord_f = 0.0;

//     float outer_res_mul_x_f = 20.0; // mul = multiplier
//     float outer_res_mul_y_f = 20.0; // mul = multiplier

//     // float outer_to_inner_res_mul = 16.0; // mul = multiplier

//     // float how_many_chars_per_screen_lengthwise_float = 16.0;
//     // float how_many_chars_per_screen_heightwise_float = 10.0;



//     // discretize into # of unique parts equal to outer_res_multiplier:
//     // outer_x_coord_i = int(v_pos.x * outer_res_mult);
//     // outer_y_coord_i = int(v_pos.y * outer_res_mult);
//     outer_x_coord_i = int(v_pos.x * outer_res_mul_x_f);
//     outer_y_coord_i = int(v_pos.y * outer_res_mul_y_f);

//     // return back to float:
//     outer_x_coord_f = float(outer_x_coord_i) / outer_res_mul_x_f;
//     outer_y_coord_f = float(outer_y_coord_i) / outer_res_mul_y_f;

//     int cell_number = outer_y_coord_i * int(outer_res_mul_x_f) + outer_x_coord_i;

//     return measureFloat(float(cell_number));
//     return vec4(outer_x_coord_f, outer_y_coord_f, 0.0, 1.0);

//     // return sampleColor = vec4(float(mod(measure_number_float,60.0)) / 60.0, float( mod( measure_number_float, 3600.0 ) /60.0/60.0 ), float( mod ( measure_number_float , 60.0 * 3600.0 ) /60.0/60.0/60.0 ), 1.0);

// }

// void main(void) {

//     vec4 tempColor = sampleColor();
//     tempColor = gammaFilter(tempColor, 2.0);
//     FragColor = tempColor;

// }
































`;