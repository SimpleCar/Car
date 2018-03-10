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

    @RequestMapping("test")
    public String test(Model model){
        model.addAttribute("userList",userService.selectAll());
        return "test";
    }
}
