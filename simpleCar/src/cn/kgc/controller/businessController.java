package cn.kgc.controller;

import cn.kgc.entity.CarInfo;
import cn.kgc.service.BusinessService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("businessController")
public class businessController {
    @Resource
    private BusinessService businessService;
//    @RequestMapping
//    public String doLogin(){
//
//        return "business";
//    }
    @RequestMapping("/business")
    public String business(Model model){

        //测试进入控制器
        System.out.print("测试"+"。进入控制器。999999999999999999999999999999999999999999999999999999999");

//        List<CarInfo> carInfoList=businessService.findAllCarInfoByBusiness(1);
//        model.addAttribute("carInfoList",carInfoList);

       /* int num=0;



        System.out.println("还没错。。555555555555555555555555555555555555555555555555555555");
        CarInfo c=new CarInfo();
        c.setCarId(9);
        c.setCarName("黄蜂d");
        c.setCarBrand("雪弗兰d");
        String price="100000";
        double price1=new Double(price);
        String price2=String.valueOf(price1);
        c.setCarPrice(price2);
        c.setCarLevel("跑车d");
        String firstPay="90000";
        double firstPay1=new Double(firstPay);
        String firstPay2=String.valueOf(firstPay1);
        c.setCarFirstPay(firstPay2);
        double lastPay=(price1-firstPay1);
        String lastPay2=String.valueOf(lastPay);
        c.setCarLastPay(lastPay2);
        c.setCarDesc("大黄蜂会变形d");
        String business="2";
        c.setBusiness(business);
        String carImg="huangfengd.jpg";
        c.setImgUrl(carImg);
        System.out.println("还没错。。666666666666666666666666666666666666");
        System.out.println(c.toString());
        num=businessService.addCarInfos(c);*/

//        num=businessService.deleteCarInfo(6);
//        CarInfo cc=new CarInfo();
//        cc.setCarId(7);
//        num=businessService.deleteCarInfod(cc);


        CarInfo  cc   = new CarInfo();
        cc.setCarName("Dd");
        cc.setCarBrand("dddfff");
       int num=  businessService.addCarInfos(cc);

        System.out.println("还没错。。777777777777777777777777777777777777777777");
        if (num>0){
            System.out.println("插入成功le");
        }else{
            System.out.println("插入失败");
        }
        return  "business";
    }

}
