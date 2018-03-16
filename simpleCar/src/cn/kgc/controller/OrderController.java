package cn.kgc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("orderController")
public class OrderController {
    @RequestMapping("goSingle")
    public String goSingle(){
        return "single";
    }
    @RequestMapping("goCredit")
    public  String goCredit(){
        return "credit";

    }
    @RequestMapping("goTrueName")
    public  String goTruename(){
        return "trueName";
    }
    @RequestMapping("goChange")
    public String goChange(){
        return  "changePassword";
    }
}
