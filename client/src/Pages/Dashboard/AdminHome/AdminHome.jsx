import useAuth from "../../../hooks/useAuth";
import useeAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoWalletOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useeAxiosSecure();

  const {
    data: stats = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // custom shape for bar charts
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom piechart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map(data =>{
    return {name: data.category, value: data.revenue}
  })


  return (
    <div className="m-5">
      <h2 className="text-3xl pt-2">
        <span>Hi, Welcome to Admin Home</span>
        <span className="text-blue-500 pl-2 font-semibold">
          {user?.displayName ? user.displayName : "Back"}
        </span>
      </h2>
      <div className="stats gap-5 bg-transparent mt-5 md:w-[630px] lg:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="stat rounded-lg bg-gradient-to-r from-purple-500 to-slate-300 p-5">
          <div className="stat-value flex gap-3 justify-center">
            <IoWalletOutline size={30} className="mt-2" />
            <span className="text-3xl font-medium pt-1">
              {stats?.revenue ? Number(stats.revenue).toFixed(2) : "0.00"}
            </span>
          </div>
          <p className="flex pl-6 justify-center text-white font-serif text-lg">
            Revenue
          </p>
        </div>

        <div className="stat rounded-lg bg-gradient-to-r from-orange-400 to-slate-300 p-5">
          <div className="stat-value flex gap-3 justify-center">
            <FaUsers size={30} className="mt-2" />
            <span className="text-3xl font-medium pt-1">
              {stats?.users || "0"}
            </span>
          </div>
          <p className="flex pl-6 justify-center text-white font-serif text-lg">
            Users
          </p>
        </div>

        <div className="stat rounded-lg bg-gradient-to-r from-green-400 to-slate-300 p-5">
          <div className="stat-value flex gap-3 justify-center">
            <MdOutlineProductionQuantityLimits size={30} className="mt-2" />
            <span className="text-3xl font-medium pt-1">
              {stats?.menuItems || "0"}
            </span>
          </div>
          <p className="flex pl-6 justify-center text-white font-serif text-lg">
            Products
          </p>
        </div>

        <div className="stat rounded-lg bg-gradient-to-r from-sky-400 to-slate-300 p-5">
          <div className="stat-value flex gap-3 justify-center">
            <GiNotebook size={30} className="mt-2" />
            <span className="text-3xl font-medium pt-1">
              {stats?.orders || "0"}
            </span>
          </div>
          <p className="flex pl-6 justify-center text-white font-serif text-lg">
            Orders
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 mt-28">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
