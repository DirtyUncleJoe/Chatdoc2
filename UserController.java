import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/login")
    public String login(@RequestParam String username) {
        // Hier könntest du die Anmelde-Logik implementieren
        return "Erfolgreich angemeldet als " + username;
    }

    @PostMapping("/chat")
    public String chat(@RequestParam String message) {
        // Hier könntest du die Logik für automatisierte Antworten implementieren
        if (message.toLowerCase().contains("spezielleswort")) {
            return "Das ist eine spezielle Antwort!";
        } else {
            return "Standardantwort oder Chat-Logik hier";
        }
    }
}