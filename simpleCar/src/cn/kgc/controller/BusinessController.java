package cn.kgc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("businessController")
public class BusinessController {
    @RequestMapping
    public String doLogin(){

        return "business";
    }
}
