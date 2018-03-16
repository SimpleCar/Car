package cn.kgc.controller;

import cn.kgc.entity.Business;
import cn.kgc.entity.Car;
import cn.kgc.entity.CarInfo;
import cn.kgc.entity.User;
import cn.kgc.service.BusinessService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("businessController")
public class BusinessController {
    @RequestMapping
    public String doLogin() {
        return "businessLogin";
    }
    @Resource
    //自动填充 Service层的接口
    private BusinessService businessService;

    @RequestMapping("/business")
    //进入我是商家页面
    public String business(Model model, HttpServletRequest request){
        //测试进入控制器
        System.out.println("测试"+"进入控制器。。。。。。。。。。。。。。。。。。。。。。");
        User user=new User();
        user.setUphone("15566665555");
        request.getSession().setAttribute("yonghu",user);
        Object object=request.getSession().getAttribute("yonghu");
        if (object==null||object==""){
            System.out.println("object是空的");
            return "businessLogin";
        }else {
            System.out.println("obj不是空的。。。。。。。。。。。。。。。。。");
            User user1 = (User) object;
            System.out.println(user1.getUphone() + "。。。。。。。。。。。。。。。。。。。。。");
            List<Car> list = businessService.fineCarListByBusiness(1);
            Business business = businessService.findBusinessbIdByPhone(user1.getUphone());
            System.out.println(business.toString());
            model.addAttribute("business", business);
            model.addAttribute("carListByBusiness", list);
            return "business";
        }
    }

    @RequestMapping("businessRegister")
    //去到商家注册页面
    public String businessRegister(){
        return  "businessRegister";
    }

    @RequestMapping("dobusinessRegister")
    //处理商家注册信息 把注册信息插入到数据库里
    public String dobunessRegister(HttpServletRequest request, @RequestParam(value = "yingyezhizhao",required = false)MultipartFile mFile,@RequestParam("shangjialeixing") String shangjialeixing,@RequestParam("suozaiquyu") String suozaiquyu,@RequestParam("shangjiamingzi") String shangjiamingzi,@RequestParam("shangjiashouji") String shangjiashouji){
        System.out.println("你的申请提交我们已收到,审核后将会由我们的工作人员与您联系请保持手机畅通."+shangjiamingzi+suozaiquyu+shangjialeixing+shangjiashouji);
        Business business=new Business();
        business.setbName(shangjiamingzi);
        business.setbPhone(shangjiashouji);
        business.setbType(shangjialeixing);
        business.setbAdd(suozaiquyu);
        int num=0;
        num=businessService.addBusiness(business);
        if (num>0){
            System.out.println("11111111111111111111111111111111111111111111111111");
        }else {
            System.out.println("00000000000000000000000000000000000000000000000000000");
        }
        //判断文件 不为空就进去
//        if(!mFile.isEmpty()){
//
//            //通过requst.gets.getsc.getRP设置真正文件夹路径用来存放上传的文件
//            String filePath=request.getSession().getServletContext().getRealPath("cunFangWenJianJia"+ File.separator);
//
//            //通过上传的文件.getOriginalFilename()获取源文件名
//            String fileName=mFile.getOriginalFilename();
//
//            //通过FilenameUtils.getExtension(源文件名)获取后缀
//            String prxy= FilenameUtils.getExtension(fileName);
//
//            int length=500000;
//            if (mFile.getSize()>length) {
//                request.setAttribute("error", "文件过大,不允许上传");
//            }else if(prxy.equalsIgnoreCase("jpg")||prxy.equalsIgnoreCase("peg")||prxy.equalsIgnoreCase("jpeg")){
//                //毫秒值+后缀作为随机名字 不能忘记加上“.”
//                String randomName=System.currentTimeMillis()+"."+prxy;
//                //新new一个文件 把文件夹路径和随机名字拼接
//                File file=new File(filePath, randomName);
//                //判断文件如果不存在就进去
//                if (!file.exists()) {
//                    //如果不存在就创建目录
//                    file.mkdirs();
//                }
//                try {
//                    //上传
//                    mFile.transferTo(file);
//                    System.out.println("上传到了"+filePath);
//                } catch (IllegalStateException e) {
//                    // TODO Auto-generated catch block
//                    e.printStackTrace();
//                } catch (IOException e) {
//                    // TODO Auto-generated catch block
//                    e.printStackTrace();
//                }
//            }
//        }
        return "businessRegisterle";
    }

    @RequestMapping("gotoAddCar")
    public String addCar(){
        return "addCar";
    }
}
