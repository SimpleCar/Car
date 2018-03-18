package cn.kgc.controller;

import cn.kgc.entity.Order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

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

    @RequestMapping("goto")
    public String gotos(Order order, Model model, HttpServletRequest request){

            return "redirect:/goTo/order";

    }
}
