package Juego.SuperSpaceShowdown;

import java.util.*;
import org.springframework.stereotype.*;

@Component
public class SalaChat {
	List<String> mensajes = new ArrayList<String>();

	public SalaChat() {
	}

	public List<String> getMensajes() {
		return mensajes;
	}

	public void setMensajes(List<String> mensajes) {
		this.mensajes = mensajes;
	}
}
