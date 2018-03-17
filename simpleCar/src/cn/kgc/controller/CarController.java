package cn.kgc.controller;

import cn.kgc.entity.Car;
import cn.kgc.service.CarService;
import com.alibaba.fastjson.JSON;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
@RequestMapping("carController")
public class CarController {
    @Resource
    private CarService carService;


    //去新车页面
    @RequestMapping("newCar")
    public String newCar() {
        return "newCar";
    }

    //去20到30万所有车界面
    @RequestMapping("goSelectAll2030")
    public String goSelectAll2030() {
        return "selectAll2030";
    }

    //去20-30页面跑车
    @RequestMapping("superCar20")
    public String superCar20(Model model, Car car) {
        //传最大值
        car.setCmax(30);
        //传最小值
        car.setCmin(20);
        //获取车辆
        List<Car> list = carService.selectCar(car);
        //获取一共有多少条数据
        int count = carService.selectCarCount(car);
        model.addAttribute("list", list);
        model.addAttribute("count", count);
        return "superCar20";

    }

    //去30到45万所有车界面
    @RequestMapping("goSelectAll3045")
    public String goSelectAll3045() {
        return "selectAll3045";
    }


    //去30-45页面跑车
    @RequestMapping("superCar30")
    public String superCar30(Model model, Car car) {
        car.setCmax(45);
        car.setCmin(30);
        List<Car> list = carService.selectCar(car);
        int count = carService.selectCarCount(car);
        model.addAttribute("count", count);
        model.addAttribute("list", list);
        return "superCar30";
    }

    //去所有45万车的界面
    @RequestMapping("goSelectAll45")
    public String goSelectAll45() {
        return "selectAll45";
    }

    //去45以上跑车
    @RequestMapping("superCar45")
    public String superCar45(Model model) {
        List<Car> list = carService.selectGreaterThanSuperCar();
        int count = carService.selectGreaterThanSuperCarCount();
        model.addAttribute("count", count);
        model.addAttribute("list", list);
        return "superCar45";
    }

    //去45以上豪车
    @RequestMapping("thanLuxuryCar")
    public String thanLuxuryCar(Model model) {
        List<Car> list = carService.selectGreaterThanLuxuryCar();
        int count = carService.selectGreaterThanLuxuryCarCount();
        model.addAttribute("count", count);
        model.addAttribute("list", list);
        return "thanLuxuryCar";
    }

    /**
     * @param model
     * @param request
     * @param car
     * @return
     */
    //根据名字查车
    @RequestMapping("goCarInformation")
    public String goCarInformation(Model model, HttpServletRequest request, Car car) {
        String cname = request.getParameter("cname");
        car.setCname(cname);
        List<Car> list = carService.selectCarName(car);
        model.addAttribute("list", list);
        return "goCarInformation";
       /* return "goCarInformationTest";*/
    }

    //异步刷新
    @RequestMapping("getAJAX")
    public void getAJAX(Model model, HttpServletRequest request, Car car, HttpServletResponse response) throws IOException {
        //拿到车名
        String cname = request.getParameter("carname");
        //设置车名
        car.setCname(cname);
        //通过车名查到车的全价
        int price = carService.selectPrice(car);
        //拿到选择的是哪个首付
        //拿到车的价格
        double instalmentAmount = Double.parseDouble(request.getParameter("end"));
        //车的折扣价

        int end = carService.selectInstalmentAmount(instalmentAmount, cname);
        //分期额度
        int discount = price - end;
        response.getWriter().write("  {\"price\":" + price + ",\"discount\":" + discount + "}");

    }
}



