package Juego.SuperSpaceShowdown;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketSuperSpaceShowdownHandler extends TextWebSocketHandler {
	
	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("Nuevo jugador. ID: " + session.getId());
		
		ObjectNode host = mapper.createObjectNode();
		host.put("EsHost", "0");
		
		if(sessions.isEmpty()) {
			sessions.put(session.getId(), session);
            host.put("EsHost", "1");
		}else { 
			sessions.put(session.getId(), session); 
		}
		
		session.sendMessage(new TextMessage(host.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Sesión cerrada. ID: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonNode node = mapper.readTree(message.getPayload());
		
		enviarInfo(session, node);
	}
	
	private void enviarInfo(WebSocketSession session, JsonNode node) throws IOException {
		ObjectNode newNode = mapper.createObjectNode();
        
		// Jugador listo
        newNode.put("ready", node.get("ready").asBoolean());
        
        // Posicion jugador
        newNode.put("x", node.get("x").asDouble());
        newNode.put("y", node.get("y").asDouble());
        
        //Animacion del jugador
        newNode.put("animacionJugadores", node.get("animacionJugadores").asText());
        
        //Balas
        newNode.put("balaX", node.get("balaX").asDouble());
        newNode.put("balaY", node.get("balaY").asDouble());
        
        //Municion
        newNode.put("municion", node.get("municion").asDouble());
        
        //Puntos
        newNode.put("puntos", node.get("puntos").asDouble());
        
        //Tiempo
        newNode.put("tiempo", node.get("tiempo").asDouble()); 
        
        //Posicion power up municion
        newNode.put("randomMunX", node.get("randomMunX").asDouble());
        newNode.put("randomMunY", node.get("randomMunY").asDouble());
        
        //Número random para power up
        newNode.put("numRandom", node.get("numRandom").asDouble());
        
        //Posicion del power up
        newNode.put("powerX", node.get("powerX").asDouble());
        newNode.put("powerY", node.get("powerY").asDouble());
		
        // Mandamos la informacion al resto de jugadores
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}
}
