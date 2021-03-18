

```

void CheckForGLErrors(std::string functionName, int line){
	GLenum error = glGetError();
	if(error != GL_NO_ERROR ){
		std::cout << "OpenGL error in " << functionName
				<< " (at line "<< line << ")" << ": \n";
		PrintGLError(error);
	}
}


glfwInit();
CheckForGLErrors(__func__, __LINE__);

```