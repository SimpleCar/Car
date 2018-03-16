package cn.kgc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("goTo")
public class goTo {

    @RequestMapping("indexPage")
    public String indexPage(){
        return "indexPage";
    }

    @RequestMapping("business")
    public String business(){
        return "business";
    }

    @RequestMapping("newCar")
    public String newCar(){
        return "newCar";
    }

    @RequestMapping("signIn")
    public String signIn(){
        return "testSignIn";
    }

    @RequestMapping("try")
    public String goTry(){
        return "try";
    }

    @RequestMapping("stages")
    public String stages(){
        return "stages";
    }

    @RequestMapping("businessLogin")
    public String businessLogin(){
        return "businessLogin";
    }

    @RequestMapping("carInsurance")
    public String carInsurance(){
        return "carInsurance";
    }

    @RequestMapping("supercar20")
    public String supercar20(){
        return "SuperCar20";
    }

@RequestMapping("order")
    public  String order(){
        return "OrderList";
}
}
