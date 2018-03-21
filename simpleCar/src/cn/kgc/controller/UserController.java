package cn.kgc.controller;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.utils.SendCode;
import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Random;

@Controller
@RequestMapping("userController")
public class UserController {
    @Resource
    private UserService userService;

    private SendCode sendCode;

    @RequestMapping("goSignIn")
    public String goSignIn() {
        return "signIn";
    }

    @RequestMapping("signIn")
    public String signIn(HttpServletResponse servletResponse, HttpServletRequest request) {
        String phone = request.getParameter("uphone");
        User user = userService.selectByPhone(phone);
        request.getSession().setAttribute("uname", user.getUname());
        return "indexPage";
    }

    @RequestMapping("logout")
    public void logout(HttpServletRequest servletRequest,HttpServletResponse servletResponse) {
        servletRequest.getSession().removeAttribute("uname");
        servletRequest.getSession().invalidate();
        try {
            servletResponse.getWriter().write("logout");
        } catch (IOException e) {
            e.printStackTrace();
        }
        /*servletRequest.getSession().setAttribute("uname", null);*/

    }

    @RequestMapping("goSignUp")
    public String goSignUp() {

        return "signUp";
    }

    @RequestMapping("signUp")
    public String signUp(User user, HttpServletRequest servletRequest) {
        int result = userService.insertUser(user.getUphone(), user.getUpwd());
        if (result > 0) {
            servletRequest.getSession().setAttribute("uname",user.getUphone());
            return "indexPage";
        } else {
            return "signUp";
        }
    }

    @RequestMapping("checkPhoneNum")
    public void checkPhoneNum(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String phoneNum = servletRequest.getParameter("phoneInput");
        User user = userService.selectByPhone(phoneNum);
        boolean isPhoneExist = user != null ? true : false;
        servletResponse.setContentType("text/html;charset=UTF-8");
        String data = JSON.toJSONString(isPhoneExist);
        try {
            servletResponse.getWriter().write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("checkPwd")
    public void checkPwd(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        String phoneNum = servletRequest.getParameter("phoneInput");
        String pwd = servletRequest.getParameter("pwd");
        User user = userService.selectUser(phoneNum, pwd);
        boolean isUserExist = user != null ? true : false;
        servletResponse.setContentType("text/html;charset=UTF-8");
        String data = JSON.toJSONString(isUserExist);
        try {
            servletResponse.getWriter().write(data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("sendCode")
    public void sendCode(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
        int max = 10000;
        int min = 1000;
        Random random = new Random();
        int code = random.nextInt(max) % (max - min + 1) + min;
        String code2 = code + "";
        String phone = servletRequest.getParameter("phone");
        try {
            sendCode.sendSms(phone, code2);
            servletResponse.getWriter().write(code2);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }


}
