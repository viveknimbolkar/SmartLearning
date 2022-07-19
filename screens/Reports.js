import { Text, View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

export default function Reports() {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headertext}>Reports</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.chart}>
            <Text style={styles.heading}>Problem Solved</Text>
            <LineChart
              data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                  {
                    data: [67, 78, 34, 89, 23, 45, 89, 90],
                  },
                ],
              }}
              width={330} // from react-native
              height={250}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <PieChart
              data={data}
              width={300}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 50]}
              absolute
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },
  headertext: {
    fontSize: 30,
    fontWeight: "700",
    color: "black",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
  },
});
