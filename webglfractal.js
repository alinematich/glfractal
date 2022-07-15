function glmbrot(webglId, sdrSrc) {

	var palette = [
		[  0,  0,  0],[  0,  0,  0],[  8,  0,  0],[ 16,  4,  4],[ 24,  4,  8],[ 32,  8, 12],[ 40, 12, 16],[ 48, 12, 20],
		[ 56, 16, 24],[ 64, 20, 28],[ 72, 20, 32],[ 80, 24, 36],[ 88, 28, 40],[ 96, 28, 44],[104, 32, 48],[112, 36, 52],
		[120, 36, 56],[128, 40, 60],[136, 40, 64],[144, 44, 68],[152, 48, 72],[160, 48, 76],[168, 52, 80],[176, 56, 84],
		[184, 56, 88],[192, 60, 92],[200, 64, 96],[208, 64,100],[216, 68,104],[224, 72,108],[232, 72,112],[240, 76,116],
		[252, 80,120],[248, 80,120],[240, 76,116],[232, 76,112],[224, 72,108],[216, 68,104],[208, 68,100],[200, 64, 96],
		[192, 60, 92],[184, 60, 88],[176, 56, 84],[168, 56, 80],[160, 52, 76],[152, 48, 72],[144, 48, 68],[136, 44, 64],
		[128, 40, 60],[120, 40, 60],[112, 36, 56],[104, 36, 52],[ 96, 32, 48],[ 88, 28, 44],[ 80, 28, 40],[ 72, 24, 36],
		[ 64, 20, 32],[ 56, 20, 28],[ 48, 16, 24],[ 40, 16, 20],[ 32, 12, 16],[ 24,  8, 12],[ 16,  8,  8],[  8,  4,  4],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  4,  0],[  0, 12,  0],[  0, 20,  0],[  0, 28,  0],[  0, 36,  0],[  0, 44,  0],[  0, 52,  0],
		[  0, 60,  0],[  0, 68,  0],[  0, 76,  0],[  0, 84,  0],[  0, 92,  0],[  0,100,  0],[  0,108,  0],[  0,116,  0],
		[  0,124,  0],[  0,132,  0],[  0,140,  0],[  0,148,  0],[  0,156,  0],[  0,164,  0],[  0,172,  0],[  0,180,  0],
		[  0,188,  0],[  0,196,  0],[  0,204,  0],[  0,212,  0],[  0,220,  0],[  0,228,  0],[  0,236,  0],[  0,244,  0],
		[  0,252,  0],[  0,248,  0],[  0,240,  0],[  0,232,  0],[  0,224,  0],[  0,216,  0],[  0,208,  0],[  0,200,  0],
		[  0,192,  0],[  0,184,  0],[  0,176,  0],[  0,168,  0],[  0,160,  0],[  0,152,  0],[  0,144,  0],[  0,136,  0],
		[  0,128,  0],[  0,120,  0],[  0,112,  0],[  0,104,  0],[  0, 96,  0],[  0, 88,  0],[  0, 80,  0],[  0, 72,  0],
		[  0, 64,  0],[  0, 56,  0],[  0, 48,  0],[  0, 40,  0],[  0, 32,  0],[  0, 24,  0],[  0, 16,  0],[  0,  8,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  4,  4,  0],[ 12, 12,  0],[ 20, 20,  0],[ 28, 28,  0],[ 36, 36,  0],[ 44, 44,  0],[ 52, 52,  0],
		[ 60, 60,  0],[ 68, 68,  0],[ 76, 76,  0],[ 84, 84,  0],[ 92, 92,  0],[100,100,  0],[108,108,  0],[116,116,  0],
		[124,124,  0],[132,132,  0],[140,140,  0],[148,148,  0],[156,156,  0],[164,164,  0],[172,172,  0],[180,180,  0],
		[188,188,  0],[196,196,  0],[204,204,  0],[212,212,  0],[220,220,  0],[228,228,  0],[236,236,  0],[244,244,  0],
		[252,252,  0],[248,248,  0],[240,240,  0],[232,232,  0],[224,224,  0],[216,216,  0],[208,208,  0],[200,200,  0],
		[192,192,  0],[184,184,  0],[176,176,  0],[168,168,  0],[160,160,  0],[152,152,  0],[144,144,  0],[136,136,  0],
		[128,128,  0],[120,120,  0],[112,112,  0],[104,104,  0],[ 96, 96,  0],[ 88, 88,  0],[ 80, 80,  0],[ 72, 72,  0],
		[ 64, 64,  0],[ 56, 56,  0],[ 48, 48,  0],[ 40, 40,  0],[ 32, 32,  0],[ 24, 24,  0],[ 16, 16,  0],[  8,  8,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],
		[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0],[  0,  0,  0]
	]

	var center = [-0.7, 0], scale = 2.4, zoom = 0.03, max_iter = 255
	var gl, prog, tex, canvas = document.getElementById(webglId)
	try {
	    gl = canvas.getContext("experimental-webgl")
    	gl.viewport(0, 0, canvas.width, canvas.height)
	} catch (e) {
		alert("ERROR: your browser does not support WebGL.");
		return
	}
	try {
		var a = new Uint8Array(256 * 3)
		for (var i = 0; i < 256; ++i)
			a[i*3+0], a[i*3+1], a[i*3+2] = palette[i][0], palette[i][1], palette[i][2]

		tex = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, tex)


		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);


		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 256, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, a)
		// gl.texParameteri(gl.GL_TEXTURE_2D, gl.GL_TEXTURE_WRAP_S, gl.GL_REPEAT)
	} catch (e) {
		alert("ERROR: fail to initialize the palette (texture)")
		return
	}
	try {
		var src = document.getElementById(sdrSrc).text
		var sdr = gl.createShader(gl.FRAGMENT_SHADER)
		gl.shaderSource(sdr, src);
		gl.compileShader(sdr);
		console.log(sdr)
		prog = gl.createProgram()
		gl.attachShader(prog, sdr)
		gl.linkProgram(prog)
		gl.validateProgram(prog);
		if (!gl.getProgramParameter(prog, gl.VALIDATE_STATUS)) {
			console.error(
				'Shader program validate error:',
				gl.getShaderInfoLog(prog)
			);
		}
		gl.useProgram(prog)
		prog.uni_center   = gl.getUniformLocation(prog, "center")
		prog.uni_scale    = gl.getUniformLocation(prog, "scale")
		prog.uni_ratio    = gl.getUniformLocation(prog, "ratio")
		prog.uni_max_iter = gl.getUniformLocation(prog, "max_iter")
		gl.uniform1i(prog.uni_max_iter, max_iter)
		gl.uniform1f(prog.uni_ratio, canvas.width / canvas.height)
	} catch (e) {
		alert("ERROR: fail to initialize the shader."+e)
		return
	}

	function draw() {
		gl.uniform2f(prog.uni_center, center[0], center[1])
		gl.uniform1f(prog.uni_scale, scale)
		gl.drawArrays(gl.TRIANGLES, 0, 6)
	}

	draw()
}
