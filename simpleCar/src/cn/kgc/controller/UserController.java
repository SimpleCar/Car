package cn.kgc.controller;

import cn.kgc.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping("userController")
public class UserController {
    @Resource
    private UserService userService;
    @RequestMapping("indexPage")
    public String indexPage(){
        return "indexPage";
    }
    @RequestMapping("trys")
    public String trys(){
        return "try";
    }

    @RequestMapping("business")
    public String business(){
        return "business";
    }

    @RequestMapping("goSignIn")
    public String goSignIn(){
        return "signIn";
    }

    @RequestMapping("goSignUp")
    public String goSignUp(){

        return "signUp";
    }

    @RequestMapping("goOrder")
    public String goOrder(){ return "order"; }


}
