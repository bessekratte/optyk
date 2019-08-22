package optyk.controller;


import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service("userService")
public class FormController {

    @GetMapping
    public String getForm(){
        return "index.html";
    }
}