# red-neuronal-colorpicker
Red neuronal artificial sencilla con 3 parámetros de entrada y 3 de salida para, dado un color mediante un color picker, interpretar una paleta de colores dada previamente como dataset en su entrenamiento y devolver su color correspondiente.

Se le da 3 valores continuos, entre 0 y 1, como parámetros de entrada. Son los 3 canales recibidos por el colorpicker y recalculados (entre el rango máximo del canal, 255).

Al no configurar manualmente o especificar ninguna función de activación, realiza una función de activación sigmoide devolviendo como salida otros 3 valores continuos. Interpretados, y convertidos mediante una sencilla multiplicación, como los 3 canales RGB del nuevo color a utilizar.
