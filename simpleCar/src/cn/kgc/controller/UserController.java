package cn.kgc.controller;

import cn.kgc.entity.User;
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


    @RequestMapping("index")
    public String test(Model model){
        model.addAttribute("userList",userService.selectAll());
        return "index";
    }

    @RequestMapping("goSignIn")
    public String goSignIn(User user,Model model){
        model.addAttribute("user",user);
        return "signIn";
    }
}
