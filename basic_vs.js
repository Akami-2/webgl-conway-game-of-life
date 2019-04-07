    var basic_vs_source = `

        #version 300 es
        precision highp float;
        precision highp int;
        
        layout(std140, column_major) uniform;

        layout(location = 0) in vec3 position;

        out vec2 v_pos;

        uniform float time;

        uniform vec2 trans;
        uniform vec2 scale;
        // vec2 trans;
        // vec2 scale;

        void main()
        {

            // scale = vec2(0.5, 0.0 + sin(time));
            // scale = vec2(0.5, 0.5);
            // trans = vec2(0.0, 0.0);
            // trans = vec2(0.0 + cos(time), 0.0 + sin(time));
            // trans = vec2(0.0, 0.0);

            
            // v_pos = vec2( (position.x + trans.x)  / scale.x, (-position.y - trans.y) / scale.y);
            // v_pos *= scale;
            // v_pos += trans;
            // v_pos = vec2(v_pos.x, -v_pos.y);
            v_pos = vec2(position.x + 1.0, -position.y + 1.0);
            v_pos = v_pos / 2.0;


            // vec4 popo = vec4(position.x * 1.0 + 0.0, position.y * 1.0 + 0.0, position.z, 1.0);
            vec4 popo = vec4(position.x * scale.x + trans.x, position.y * scale.y + trans.y, position.z, 1.0);
            
            gl_Position = popo;
            // v_pos = vec2(gl_Position.x, gl_Position.y);
            // gl_Position = vec4(position.x * scale.x / 2.0 + trans.x, position.y * scale.y / 2.0 + trans.y, position.z, 1.0f) / 1.0;
            // // v_pos = gl_Position;
            // v_pos = vec2(gl_Position.x + 1.0, -gl_Position.y + 1.0) / 2.0;
            // v_pos *= scale / 1.0;
            // v_pos += trans;
            // v_pos *= scale;
            // v_pos = vec2(v_pos.x / scaleX * 2.0, v_pos.y / scaleY * 2.0);
            // v_pos = vec2(v_pos.x - transX, v_pos.y + transY);
            // v_pos = v_pos * vec2(scaleX, scaleY) + vec2(transX, transY);
            // v_pos = v_pos - vec2(transX, -transY);
            // v_pos /= vec2(scaleX, scaleY);
            // v_pos = (vec2(position.x * scaleX / 2.0 + transX, position.y * scaleY / 2.0 + transY) + 1.0 ) / 2.0;
        }
`;

