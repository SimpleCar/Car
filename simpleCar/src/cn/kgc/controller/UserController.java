package cn.kgc.controller;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("userController")
public class UserController {
    @Resource
    private UserService userService;

    @RequestMapping("goSignIn")
    public String goSignIn() {
        return "signIn";
    }

    @RequestMapping("signIn")
    public String signIn(Model model, HttpServletRequest request) {
        String phone = request.getParameter("mobile");
        model.addAttribute("phone", phone);
        return "indexPage";
    }

    @RequestMapping("goSignUp")
    public String goSignUp() {
        return "signUp";
    }

    @RequestMapping("signUp")
    public String signUp(User user, Model model) {
        int result = userService.insertUser(user.getUphone(), user.getUpwd());
        if (result > 0) {
            model.addAttribute("phone", user.getUphone());
            return "indexPage";
        } else {
            return "signUp";
        }
    }


}
