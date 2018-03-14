package cn.kgc.controller;

import cn.kgc.entity.Car;
import cn.kgc.service.CarService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("carController")
public class CarController {
    @Resource
    private CarService carService;
    Car car = new Car();

    //去新车页面
    @RequestMapping("newCar")
    public String NewCar() {
        return "NewCar";
    }

    //去20-30页面跑车
    @RequestMapping("superCar20")
    public String superCar20(Model model) {
        car.setCmax(30);
        car.setCmin(20);
        List<Car> list = carService.selectCar(car);

        model.addAttribute("list", list);
        return "superCar20";

    }

    @RequestMapping("goSelectALL2030")
    public String goSelectALL2030() {
        return "selectAll2030";
    }

   /* @RequestMapping("superCar20")
    public String superCar20(Model model) {
        List<Car> list = carService.selectAll();

        model.addAttribute("list", list);
        return "SuperCar20";

        //去30-45页面跑车
    @RequestMapping("superCar30")
    public String superCar30(Model model){
        car.setCmax(45);
        car.setCmin(30);
        List<Car> list=carService.selectCar(car);

        model.addAttribute("list",list);
        return "superCar30";
    }
        //去45以上跑车
        @RequestMapping("superCar45")
        public String superCar45(Model model){
            List<Car> list=carService.selectGreaterThanSuperCar();
            model.addAttribute("list",list);
            return "superCar45";
        }

        //去45以上豪车
    @RequestMapping("thanLuxuryCar")
    public String thanLuxuryCar(Model model){
        List<Car> list=carService.selectGreaterThanLuxuryCar();
        model.addAttribute("list",list);
        return "thanLuxuryCar";
    }*/


}
