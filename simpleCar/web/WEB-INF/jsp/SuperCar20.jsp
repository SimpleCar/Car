<%--
  Created by IntelliJ IDEA.
  User: Schoki
  Date: 2018/3/13
  Time: 16:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
</head>
<body>
<table>
   <tr>
       <td>id</td>
       <td>车名</td>
       <td>价格</td>
   </tr>
   <c:forEach var="car" items="${list}">
    <tr>
        <td>${car.cid}</td>
        --------------------------
        <td>${car.cname}</td>
        -----------------------------
        <td>${car.cmin}-${car.cmax}</td>
        <td><img src="${car.cimage}"></td>
    </tr>
   </c:forEach>
</table>

</body>
</html>
