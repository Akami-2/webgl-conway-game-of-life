


function start(){    
    'use strict';

    var canvas = document.getElementById("canvas");
    // var video = document.getElementById("video");

    var gl = canvas.getContext('webgl2', { 
        antialias: false, 
        premultipliedAlpha: false,
        alpha: true
    });

    var isWebGL2 = !!gl;
    if(!isWebGL2) {
        document.getElementById('info').innerHTML = 'WebGL 2 is not available.  See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">How to get a WebGL 2 implementation</a>';
        return;
    }

    var shader_vs = basic_vs_source.replace(/^\s+|\s+$/g, '');
    var basic_fs = basic_fs_text.replace(/^\s+|\s+$/g, '');
    var shader_basic = createProgram(gl, shader_vs, basic_fs);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); 

    var elementData = new Uint16Array([
        0, 1, 3,
        1, 2, 3
    ]);
    var elementBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, elementData, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    var vertices = new Float32Array([
     1.0,  1.0, 0.0,
     1.0, -1.0, 0.0,
    -1.0, -1.0, 0.0,
    -1.0,  1.0, 0.0,   
    ]);
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);

    var texCoords = new Float32Array([
        1.0, 1.0,
        1.0, 0.0,
        0.0, 0.0,
        0.0, 1.0 
    ]);
    var vertexTexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texCoords, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // -- Init Vertex Array
    var vertexArray = gl.createVertexArray();
    gl.bindVertexArray(vertexArray);
    
    var vertexPosLocation = 0;
    
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer); 
    gl.enableVertexAttribArray(vertexPosLocation);   
    gl.vertexAttribPointer(vertexPosLocation, 3, gl.FLOAT, false, 12, 0); // 12 = 4 bytes per float
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementBuffer);

    var drawVertexTexLocation = 3; // set with GLSL layout qualifier
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexBuffer);
    gl.vertexAttribPointer(drawVertexTexLocation, 2, gl.FLOAT, false, 8, 0);
    gl.enableVertexAttribArray(drawVertexTexLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    
    // gl.bindVertexArray(null);

    var uTime = 0.0;

    function render() {

        //window.alert("yo yo yo");
        // console.log("render function call");

        uTime += 0.01;

        //resize();
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);  

        // Pass 2: Draw to screen
        // gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
        gl.clearColor(0.0, 1.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // BACKGROUND PREP
            gl.useProgram(shader_basic);
            gl.uniform1f(gl.getUniformLocation(shader_basic, "time"), uTime);
            gl.uniform2f(gl.getUniformLocation(shader_basic, "resolution"), canvas.width, canvas.height);
            gl.uniform2f(gl.getUniformLocation(shader_basic, "trans"), 0.0, 0.0);
            gl.uniform2f(gl.getUniformLocation(shader_basic, "scale"), 0.1, 0.1);
        // END
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        // gl.useProgram(shader_screen);

        // gl.uniform2f(gl.getUniformLocation(shader_screen, "trans"),  0.0, 0.0);
        // gl.uniform2f(gl.getUniformLocation(shader_screen, "scale"),  1.0, 1.0);

        // gl.activeTexture(gl.TEXTURE0);
        // gl.bindTexture(gl.TEXTURE_2D, color1Texture);

        // gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        //window.alert("yo yo yo 2");
        requestAnimationFrame(render);
    }
    render();


}


