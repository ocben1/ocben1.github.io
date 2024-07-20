"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[438],{1471:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return c}});var a=t(7294),l=t(1151);function r(e){const n=Object.assign({p:"p",h3:"h3",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"Horizontal scaling and vertical scaling are two different strategies used to increase the capacity and performance of a system."),"\n",a.createElement(n.h3,null,"Horizontal Scaling (Scale Out)"),"\n",a.createElement(n.p,null,'Horizontal scaling involves adding more instances of a system or components, such as servers, to a distributed network. This approach is often referred to as "scaling out."'),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"How does it work?")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Add More Machines:")," Increase capacity by adding more servers or nodes to the existing system."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Distributed Load:")," The workload is distributed across multiple servers or instances."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Load Balancing:")," Load balancers are typically used to distribute traffic evenly among the instances."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Pros:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Fault Tolerance:")," Improves fault tolerance because if one server fails, others can take over the load."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Cost-Effective:")," Can be more cost-effective since you can use commodity hardware."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Scalability:")," Easier to scale infinitely by adding more machines."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Flexibility:")," Allows for incremental upgrades and expansions."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Cons:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Complexity:")," Can add complexity to the system in terms of configuration and management."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Data Consistency:")," Maintaining data consistency and state synchronization across multiple nodes can be challenging."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Network Latency:")," May introduce network latency as data needs to be communicated between different servers."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Use Cases:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Web applications with varying and unpredictable traffic patterns."),"\n",a.createElement(n.li,null,"Distributed databases and microservices architectures."),"\n",a.createElement(n.li,null,"Systems that require high availability and fault tolerance."),"\n"),"\n",a.createElement(n.h3,null,"Vertical Scaling (Scale Up)"),"\n",a.createElement(n.p,null,'Vertical scaling involves adding more power (CPU, RAM, disk space) to an existing server or system. This approach is often referred to as "scaling up."'),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"How does it work?")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Increase Resources:")," Enhance the capacity of the existing server by upgrading its hardware components."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Single Instance:")," The system continues to run on a single server or a limited number of servers, each with higher capacity."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Pros:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Simplicity:")," Easier to implement and manage since you are only upgrading existing hardware."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Consistency:")," No need to handle distributed data or load balancing, maintaining a consistent state is simpler."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Lower Latency:")," Reduced network latency as all operations are handled within a single machine."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Cons:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Downtime:")," Typically requires downtime to upgrade hardware components."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Limitations:")," There is a physical limit to how much you can upgrade a single machine."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Cost:")," Can be more expensive due to the cost of high-end hardware."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Use Cases:")),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Applications with steady and predictable workloads."),"\n",a.createElement(n.li,null,"Systems that require high performance from a single instance, such as databases or enterprise applications."),"\n",a.createElement(n.li,null,"Environments where simplicity and ease of management are prioritized over fault tolerance."),"\n"),"\n",a.createElement(n.h3,null,"Horizontal Scaling: AWS Auto Scaling Group"),"\n",a.createElement(n.p,null,"This CloudFormation template creates an Auto Scaling Group (ASG) that horizontally scales EC2 instances based on the CPU utilization."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yaml"},'AWSTemplateFormatVersion: "2010-09-09"\nDescription: "AWS CloudFormation Template for Horizontal Scaling with Auto Scaling Group"\n\nParameters:\n  InstanceType:\n    Type: String\n    Default: t2.micro\n    Description: EC2 instance type\n\nResources:\n  # Define the Launch Configuration. Specifies the AMI ID and instance type for instances in the Auto Scaling Group.\n  LaunchConfig:\n    Type: AWS::AutoScaling::LaunchConfiguration\n    Properties:\n      ImageId: ami-0c55b159cbfafe1f0  # Replace with a valid AMI ID in your region\n      InstanceType: !Ref InstanceType\n      SecurityGroups:\n        - !Ref InstanceSecurityGroup\n\n  # Define the Auto Scaling Group. Manages a group of instances, adjusting the number of instances based on demand. It is set with a minimum size of 1, a maximum size of 5, and a desired capacity of 2.\n  AutoScalingGroup:\n    Type: AWS::AutoScaling::AutoScalingGroup\n    Properties:\n      LaunchConfigurationName: !Ref LaunchConfig\n      MinSize: 1\n      MaxSize: 5\n      DesiredCapacity: 2\n      VPCZoneIdentifier:\n        - subnet-12345678  # Replace with your subnet ID\n      TargetGroupARNs:\n        - !Ref TargetGroup\n      MetricsCollection:\n        - Granularity: "1Minute"\n      HealthCheckType: "EC2"\n      HealthCheckGracePeriod: 300\n\n  # Define the Scaling Policy. Uses target tracking scaling to adjust the number of instances based on average CPU utilization.\n  ScaleUpPolicy:\n    Type: AWS::AutoScaling::ScalingPolicy\n    Properties:\n      AutoScalingGroupName: !Ref AutoScalingGroup\n      PolicyType: "TargetTrackingScaling"\n      TargetTrackingConfiguration:\n        PredefinedMetricSpecification:\n          PredefinedMetricType: ASGAverageCPUUtilization\n        TargetValue: 50.0\n\n  # Define the Security Group. Allows SSH access to the instances.\n  InstanceSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: "Enable SSH access"\n      SecurityGroupIngress:\n        - IpProtocol: tcp\n          FromPort: 22\n          ToPort: 22\n          CidrIp: 0.0.0.0/0\n\n  # Define the Target Group for the Load Balancer. Used by the load balancer to route traffic to the instances.\n  TargetGroup:\n    Type: AWS::ElasticLoadBalancingV2::TargetGroup\n    Properties:\n      VpcId: vpc-12345678  # Replace with your VPC ID\n      Port: 80\n      Protocol: HTTP\n      HealthCheckProtocol: HTTP\n      HealthCheckPort: "80"\n      HealthCheckPath: "/"\n      Matcher:\n        HttpCode: "200"\n      TargetType: instance\n\nOutputs:\n  AutoScalingGroupName:\n    Description: "Auto Scaling Group Name"\n    Value: !Ref AutoScalingGroup\n')),"\n",a.createElement(n.h3,null,"Vertical Scaling: Modify EC2 Instance Type"),"\n",a.createElement(n.p,null,"This CloudFormation template creates a single EC2 instance and demonstrates vertical scaling by modifying the instance type."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yaml"},'AWSTemplateFormatVersion: "2010-09-09"\nDescription: "AWS CloudFormation Template for Vertical Scaling by Modifying EC2 Instance Type"\n# Instance type parameter. Allows changing the instance type to scale vertically by selecting different instance sizes (e.g., t2.micro, t2.small, t3.medium).\nParameters:\n  InstanceType:\n    Type: String\n    Default: t2.micro\n    AllowedValues: [t2.micro, t2.small, t2.medium, t2.large, t3.micro, t3.small, t3.medium, t3.large]\n    Description: EC2 instance type\n\nResources:\n  # Define the EC2 Instance. Creates a single EC2 instance with a specified instance type.\n  EC2Instance:\n    Type: AWS::EC2::Instance\n    Properties:\n      InstanceType: !Ref InstanceType\n      ImageId: ami-0c55b159cbfafe1f0  # Replace with a valid AMI ID in your region\n      SecurityGroups:\n        - !Ref InstanceSecurityGroup\n\n  # Define the Security Group. Allows SSH access to the instance.\n  InstanceSecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: "Enable SSH access"\n      SecurityGroupIngress:\n        - IpProtocol: tcp\n          FromPort: 22\n          ToPort: 22\n          CidrIp: 0.0.0.0/0\n\nOutputs:\n  InstanceId:\n    Description: "EC2 Instance ID"\n    Value: !Ref EC2Instance\n  InstanceType:\n    Description: "EC2 Instance Type"\n    Value: !Ref InstanceType\n')),"\n",a.createElement(n.h3,null,"AWS Auto Scaling"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"AWS Auto Scaling")," primarily facilitates horizontal scaling by automatically adjusting the number of Amazon EC2 instances in an Auto Scaling group. It can add or remove instances based on the current demand, ensuring that you have the right amount of compute capacity to handle your application's load.\n",a.createElement(n.strong,null,"When combined with Elastic Load Balancing (ELB)"),", AWS Auto Scaling distributes incoming application traffic across multiple instances, ensuring high availability and reliability."),"\n",a.createElement(n.p,null,"AWS allows you to change ",a.createElement(n.strong,null,"EC2 Instance Types")," to add more CPU, memory, or storage. This form of vertical scaling can be manually adjusted based on performance metrics.\n",a.createElement(n.strong,null,"ELB can also support vertical scaling")," by redirecting traffic to instances that have been manually scaled up to larger instance types."),"\n",a.createElement(n.h3,null,"Kubernetes"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Kubernetes facilitates horizontal scaling through the Horizontal Pod Autoscaler (HPA)"),", which automatically scales the number of pods in a deployment or replica set based on observed CPU utilization or other custom metrics. HPA ensures that your application can handle varying loads by adding or removing pods as needed.\nThe ",a.createElement(n.strong,null,"Cluster Autoscaler")," component can adjust the number of nodes in a Kubernetes cluster based on the resource requests of the pods. If pods cannot be scheduled due to insufficient resources, the cluster autoscaler will add more nodes to the cluster."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Kubernetes supports vertical scaling through the Vertical Pod Autoscaler (VPA)"),", which automatically adjusts the CPU and memory requests and limits for containers running in pods. VPA can recommend or automatically apply changes to the resource requests based on historical data and current usage patterns.\nKubernetes can manage the scaling of pods and resources within pods, the actual ",a.createElement(n.strong,null,"nodes can be upgraded (scaled vertically) by changing the underlying VM or hardware specifications"),". This is typically ",a.createElement(n.strong,null,"managed by the cloud provider (e.g., resizing the VM in GKE, AKS, or EKS)"),"."),"\n",a.createElement(n.h3,null,"Comparison and Use Cases"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"AWS Auto Scaling")," provides horizontal scaling for EC2 instances, ensuring that your application can handle varying loads by adjusting the number of instances. Vertical scaling is also possible by resizing instances manually."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Use Case:")," Ideal for automatically scaling EC2 instances based on demand. It's best suited for applications deployed on EC2 where you need to ensure that there is enough compute capacity to handle traffic spikes."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Scaling Method:")," Primarily horizontal scaling with some support for manual vertical scaling."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"Kubernetes")," offers robust support for both horizontal and vertical scaling. Horizontal Pod Autoscaler and Cluster Autoscaler handle horizontal scaling, while Vertical Pod Autoscaler manages vertical scaling. Kubernetes provides a flexible and powerful platform for scaling containerized applications."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Use Case:")," Ideal for containerized applications where you need fine-grained control over the scaling of individual components (pods). Kubernetes excels in microservices architectures and large-scale applications requiring dynamic scaling and orchestration."),"\n",a.createElement(n.li,null,a.createElement(n.strong,null,"Scaling Method:")," Supports both horizontal and vertical scaling of pods and nodes, providing a comprehensive solution for managing resource allocation and application performance."),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},o=t(7636);function c(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-scaling-part-1-index-mdx-1ed6f56891133b0a1d20.js.map