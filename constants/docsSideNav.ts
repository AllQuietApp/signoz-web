const docsSideNav = [
  {
    type: 'category',
    label: 'Get Started',
    route: '/docs',
    items: [
      {
        type: 'doc',
        label: 'What is SigNoz?',
        route: '/docs/introduction',
      },
      {
        type: 'category',
        label: 'Installation',
        route: '/docs/install',
        items: [
          {
            type: 'doc',
            route: '/docs/cloud',
            label: 'Setup SigNoz Cloud',
          },
          {
            type: 'category',
            label: 'Self-Host SigNoz',
            // route: '',
            items: [
              {
                type: 'doc',
                label: 'Docker Standalone',
                route: '/docs/install/docker',
              },
              {
                type: 'doc',
                label: 'Docker Swarm',
                route: '/docs/install/docker-swarm',
              },
              {
                type: 'category',
                label: 'Kubernetes',
                route: '/docs/install/kubernetes',
                // link: {
                // type: 'generated-index',
                // title: 'Kubernetes',
                // description: 'Learn how to install SigNoz on Kubernetes with Helm',
                // slug: '/docs/install/kubernetes',
                // },
                items: [
                  {
                    type: 'doc',
                    label: 'Deploying to AWS',
                    route: '/docs/install/kubernetes/aws',
                  },
                  {
                    type: 'doc',
                    label: 'Deploying to GCP',
                    route: '/docs/install/kubernetes/gcp',
                  },
                  {
                    type: 'doc',
                    label: 'Other Platform',
                    route: '/docs/install/kubernetes/others',
                  },
                ],
              },
              {
                type: 'doc',
                label: 'Troubleshooting',
                route: '/docs/install/troubleshooting',
              },
            ],
          },

          {
            type: 'category',
            label: 'Install OTel collector',
            // route: '',
            items: [
              {
                route: '/docs/tutorial/opentelemetry-binary-usage-in-virtual-machine',
                type: 'doc',
                label: 'VM',
              },
              {
                route: '/docs/tutorial/kubernetes-infra-metrics',
                type: 'doc',
                label: 'Kubernetes',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'SigNoz Features',
    type: 'category',
    items: [
      {
        type: 'doc',
        route: '/docs/product-features/query-builder',
        label: 'Query Builder',
      },
      {
        type: 'doc',
        route: '/docs/product-features/alert-management',
        label: 'Alert Management',
      },
      {
        type: 'doc',
        route: '/docs/product-features/trace-explorer',
        label: 'Trace Explorer',
      },
      {
        type: 'doc',
        route: '/docs/product-features/logs-explorer',
        label: 'Logs Explorer',
      },
      {
        type: 'doc',
        route: '/docs/product-features/saved-view',
        label: 'Saved View',
        className: 'new-doc', // Add this if you want to add a new tag in sidebar
      },
      {
        type: 'doc',
        route: '/docs/product-features/invite-team-member',
        label: 'Invite Team Member',
      },
    ],
  },
  {
    label: 'APM & Distributed Tracing',
    type: 'category',
    // route: '',
    items: [
      {
        type: 'doc',
        route: '/docs/instrumentation/overview',
        label: 'Get Started',
      },
      {
        label: 'Instrument Application',
        type: 'category',
        route: '/docs/instrumentation',
        // link: {
        // type: 'generated-index',
        // title: 'Instrument your Application',
        // description:
        // 'To instrument your applications and send data to SigNoz, follow the instructions in the sections below.',
        // slug: '/docs/instrumentation/index',
        // },
        items: [
          {
            type: 'category',
            label: 'Python',
            route: '/docs/instrumentation/python',
            // link: {
            // type: 'doc',
            // route: '/docs/instrumentation/python',
            // title: 'Python',
            // description: 'Learn how to instrument Python applications with OpenTelemetry',
            // slug: 'instrumentation/python',
            // },
            items: [
              {
                type: 'doc',
                route: '/docs/instrumentation/django',
                label: 'Django ',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/fastapi',
                label: 'FastAPI ',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/flask',
                label: 'Flask ',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/falcon',
                label: 'Falcon ',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/hypercorn-unicorn-support',
                label: 'Hypercorn/Unicorn ',
              },
            ],
          },
          {
            type: 'category',
            label: 'Java',
            route: '/docs/instrumentation/java',
            // link: {
            // type: 'doc',
            // route: '/docs/instrumentation/java',
            // title: 'Python',
            // description: 'Learn how to instrument Python applications with OpenTelemetry',
            // slug: 'instrumentation/python',
            // },
            items: [
              {
                type: 'doc',
                route: '/docs/instrumentation/springboot',
                label: 'Spring Boot',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/tomcat',
                label: 'Tomcat',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/jboss',
                label: 'JBoss',
              },
            ],
          },
          {
            type: 'category',
            label: 'Javascript',
            route: '/docs/instrumentation/javascript',
            // link: {
            // type: 'doc',
            // route: '/docs/instrumentation/javascript',
            // title: 'Python',
            // description: 'Learn how to instrument Python applications with OpenTelemetry',
            // slug: 'instrumentation/python',
            // },
            items: [
              {
                type: 'doc',
                route: '/docs/instrumentation/express',
                label: 'Express',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/nestjs',
                label: 'NestJS',
              },
              {
                type: 'doc',
                route: '/docs/instrumentation/angular',
                label: 'Angular',
              },
            ],
          },
          {
            type: 'doc',
            label: 'Golang',
            route: '/docs/instrumentation/golang',
          },
          {
            type: 'doc',
            label: 'PHP',
            route: '/docs/instrumentation/php',
          },
          {
            type: 'doc',
            label: '.NET',
            route: '/docs/instrumentation/dotnet',
          },
          {
            type: 'doc',
            label: 'Ruby on Rails',
            route: '/docs/instrumentation/ruby-on-rails',
          },
          {
            type: 'doc',
            label: 'Elixir',
            route: '/docs/instrumentation/elixir',
          },
          {
            type: 'doc',
            label: 'Rust',
            route: '/docs/instrumentation/rust',
          },
          {
            type: 'doc',
            label: 'Swift',
            route: '/docs/instrumentation/swift',
          },
        ],
      },
      {
        type: 'category',
        label: 'APM Product Overview',
        // route: '',
        items: [
          {
            type: 'doc',
            label: 'View Services',
            route: '/docs/userguide/metrics',
          },
          {
            type: 'category',
            label: 'View Traces',
            route: '/docs/userguide/traces',
            // link: {
            // type: 'doc',
            // },
            items: [
              {
                type: 'doc',
                label: 'Span Details',
                route: '/docs/userguide/span-details',
              },
            ],
          },
          {
            type: 'doc',
            label: 'Service Map',
            route: '/docs/userguide/service-map',
          },
        ],
      },
      {
        type: 'category',
        label: 'Trace API',
        // route: '',
        items: [
          {
            type: 'doc',
            route: '/docs/traces-management/trace-api/overview',
            label: 'Overview',
          },
          {
            type: 'doc',
            route: '/docs/traces-management/trace-api/payload-model',
            label: 'Payload Model',
          },
          {
            type: 'doc',
            route: '/docs/traces-management/trace-api/search-traces',
            label: 'Search Traces',
          },
          {
            type: 'doc',
            route: '/docs/traces-management/trace-api/aggregate-traces',
            label: 'Aggregate Traces',
          },
        ],
      },
      {
        type: 'category',
        label: 'Tutorials',
        // route: '',
        items: [
          {
            type: 'doc',
            route: '/docs/application-monitoring/api-monitoring',
            label: 'API Monitoring',
          },
          {
            type: 'doc',
            route: '/docs/traces-management/guides/apm-metrics',
            label: 'APM Metrics',
          },
          {
            type: 'doc',
            route: '/docs/traces-management/guides/drop-spans',
            label: 'Control Traces Volume',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/instrumentation/troubleshoot-instrumentation',
        label: 'Troubleshooting',
      },
    ],
  },
  {
    label: 'Infrastructure Monitoring',
    type: 'category',
    // route: '',
    items: [
      {
        type: 'doc',
        route: '/docs/userguide/send-metrics-cloud',
        label: 'Send Metrics to SigNoz Cloud',
      },
      {
        type: 'doc',
        route: '/docs/userguide/send-metrics',
        label: 'Send Metrics (Self Hosted)',
      },
      {
        type: 'doc',
        route: '/docs/userguide/drop-metrics',
        label: 'Drop Metrics',
      },
      {
        type: 'doc',
        route: '/docs/userguide/navigate-user-interface',
        label: 'Navigate the User Interface',
      },
      {
        type: 'doc',
        route: '/docs/userguide/hostmetrics',
        label: 'Hostmetrics Dashboard',
      },
      {
        type: 'doc',
        route: '/docs/userguide/collecting-ecs-logs-and-metrics',
        label: 'ECS Infra Metrics & Logs',
      },
      {
        type: 'doc',
        route: '/docs/userguide/collecting-ecs-sidecar-infra',
        label: 'ECS Infra Sidecar',
      },
    ],
  },
  {
    label: 'Logs Management',
    type: 'category',
    // route: '',
    items: [
      {
        type: 'doc',
        route: '/docs/userguide/logs',
        label: 'Get Started',
      },
      {
        type: 'category',
        label: 'Send Logs to SigNoz',
        items: [
          {
            type: 'doc',
            route: '/docs/userguide/collect_kubernetes_pod_logs',
            label: 'Kubernetes pod logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/collect_docker_logs',
            label: 'Docker logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/heroku_logs_to_signoz',
            label: 'Heroku logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/vercel_logs_to_signoz',
            label: 'Vercel logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/send-logs-http',
            label: 'HTTP logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/collecting_syslogs',
            label: 'Syslogs',
          },
          {
            type: 'category',
            label: 'Application Logs',
            items: [
              {
                type: 'doc',
                route: '/docs/userguide/collect_logs_from_file',
                label: 'From Log File',
              },
              {
                type: 'doc',
                route: '/docs/userguide/python-logs-auto-instrumentation',
                label: 'Python Logs Auto-Instrumentation',
              },
              {
                type: 'doc',
                route: '/docs/userguide/collecting_application_logs_otel_sdk_python',
                label: 'Using OTel Python SDK',
              },
              {
                type: 'doc',
                route: '/docs/userguide/collecting_application_logs_otel_sdk_java',
                label: 'Using OTel Java SDK',
              },
            ],
          },
          {
            type: 'doc',
            route: '/docs/userguide/collecting_nodejs_winston_logs',
            label: 'NodeJS Winston logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/send-cloudwatch-logs-to-signoz',
            label: 'Cloudwatch logs',
          },
          {
            type: 'category',
            label: 'Existing Collectors to SigNoz',
            items: [
              {
                type: 'doc',
                route: '/docs/userguide/fluentbit_to_signoz',
                label: 'FluentBit to SigNoz',
              },
              {
                type: 'doc',
                route: '/docs/userguide/fluentd_to_signoz',
                label: 'FluentD to SigNoz',
              },
              {
                type: 'doc',
                route: '/docs/userguide/logstash_to_signoz',
                label: 'Logstash to SigNoz',
              },
            ],
          },
          {
            type: 'doc',
            route: '/docs/logs-management/send-logs/collect-tomcat-access-and-garbage-collector-logs',
            label: 'Tomcat',
          },
        ],
      },
      {
        type: 'category',
        label: 'Preprocess Logs',
        route: '/docs/logs-pipelines/introduction',
        // link: {
        // type: 'doc',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/logs-pipelines/concepts',
            label: 'Concepts',
          },
          {
            type: 'doc',
            route: '/docs/logs-pipelines/processors',
            label: 'Log Processors',
          },
          {
            type: 'category',
            label: 'Guides',
            route: '/docs/category/guides',
            // link: {
            // type: 'generated-index',
            // title: 'Logs Pipeline Guides',
            // description:
            // 'See these guides for detailed walkthroughs on creating Log Pipelines for specific purposes.',
            // },
            items: [
              {
                type: 'doc',
                route: '/docs/logs-pipelines/guides/json',
                label: 'Parse JSON logs',
              },
              {
                type: 'doc',
                route: '/docs/logs-pipelines/guides/trace',
                label: 'Parse Trace Information',
              },
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Features',
        // route: '',
        items: [
          {
            type: 'doc',
            route: '/docs/userguide/logs_fields',
            label: 'Fields in Logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/logs_query_builder',
            label: 'Logs Query Builder',
          },
        ],
      },
      {
        type: 'category',
        label: 'Logs API',
        // route: '',
        items: [
          {
            type: 'doc',
            route: '/docs/logs-management/logs-api/overview',
            label: 'Overview',
          },
          {
            type: 'doc',
            route: '/docs/logs-management/logs-api/payload-model',
            label: 'Payload Model',
          },
          {
            type: 'doc',
            route: '/docs/logs-management/logs-api/search-logs',
            label: 'Search Logs',
          },
          {
            type: 'doc',
            route: '/docs/logs-management/logs-api/aggregate-logs',
            label: 'Aggregate Logs',
          },
          {
            type: 'doc',
            route: '/docs/logs-management/logs-api/logs-url-for-explorer-page',
            label: 'Logs URL for Explorer',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/userguide/logs_troubleshooting',
        label: 'Troubleshooting',
      },
      {
        type: 'doc',
        route: '/docs/logs-management/guides/drop-logs',
        label: 'Guide to drop logs',
      },
    ],
  },
  {
    label: 'Metrics',
    type: 'category',
    items: [
      {
        type: 'doc',
        route: '/docs/metrics-management/types-and-aggregation',
        label: 'Types and Aggregation',
      },
    ],
  },
  {
    label: 'Dashboards',
    type: 'category',
    // route: '',
    items: [
      {
        type: 'doc',
        route: '/docs/userguide/manage-dashboards',
        label: 'Manage Dashboards',
      },
      {
        type: 'doc',
        route: '/docs/userguide/manage-panels',
        label: 'Manage Panels',
      },
      {
        type: 'category',
        route: '/docs/dashboards/panel-types',
        label: 'Panel Types',
        items: [
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/bar',
            label: 'Bar Chart',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/histogram',
            label: 'Histogram',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/list',
            label: 'List',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/pie',
            label: 'Pie',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/table',
            label: 'Table',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/timeseries',
            label: 'Timeseries',
          },
          {
            type: 'doc',
            route: '/docs/dashboards/panel-types/value',
            label: 'Value',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/userguide/manage-variables',
        label: 'Manage Variables',
      },
    ],
  },
  {
    label: 'Querying',
    type: 'category',
    // route: '',
    items: [
      {
        type: 'doc',
        route: '/docs/userguide/create-a-custom-query',
        label: 'Create a Custom Query',
      },
      {
        type: 'doc',
        route: '/docs/userguide/query-builder',
        label: 'Query Builder',
      },
      {
        type: 'category',
        // route: '',
        label: 'ClickHouse Query',
        items: [
          {
            type: 'doc',
            route: '/docs/userguide/write-a-metrics-clickhouse-query',
            label: 'Metrics',
          },
          {
            type: 'doc',
            route: '/docs/userguide/logs_clickhouse_queries',
            label: 'Logs',
          },
          {
            type: 'doc',
            route: '/docs/userguide/writing-clickhouse-traces-query',
            label: 'Traces',
          },
        ],
      },
    ],
  },
  {
    label: 'Alerts',
    type: 'category',
    route: '/docs/alerts',
    // link: {
    //   type: 'generated-index',
    //   title: 'Alert Management in SigNoz',
    //   description:
    //     'This documentation helps you in understanding the Alerts feature in SigNoz and how you can create different types of alerts.',
    //   slug: '/docs/alerts',
    // },
    items: [
      {
        type: 'doc',
        route: '/docs/userguide/alerts-management',
        label: 'Alert Management',
      },
      // {
      //   type: 'doc',
      //   route: 'product-features/alerts/alerts-notification-channel',
      //   label: 'Notification Channel',
      // },
      {
        label: 'Setup Alerts Notification',
        type: 'category',
        route: '/docs/setup-alerts-notification',
        // link: {
        //   type: 'generated-index',
        //   title: 'Setup Alerts Notifications Channel',
        //   description:
        //     'You can setup notification channel for sending the generated alerts to other applications. Currently, the following channels are supported.',
        //   slug: '/docs/setup-alerts-notification',
        // type: "doc",
        // route: "product-features/alerts/alerts-notification-channel",
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/slack',
            label: 'Slack',
          },
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/webhook',
            label: 'Webhook',
          },
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/pagerduty',
            label: 'PagerDuty',
          },
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/opsgenie',
            label: 'Opsgenie',
          },
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/ms-teams',
            label: 'MS Teams',
          },
          {
            type: 'doc',
            route: '/docs/alerts-management/notification-channel/email',
            label: 'Email',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/alerts-management/metrics-based-alerts',
        label: 'Metrics based Alert',
      },
      {
        type: 'doc',
        route: '/docs/alerts-management/log-based-alerts',
        label: 'Log based Alert',
      },
      {
        type: 'doc',
        route: '/docs/alerts-management/trace-based-alerts',
        label: 'Trace based Alert',
      },
      {
        type: 'doc',
        route: '/docs/alerts-management/exceptions-based-alerts',
        label: 'Exceptions based Alert',
      },
    ],
  },
  {
    type: 'doc',
    route: '/docs/monitor-http-endpoints',
    label: 'Monitor HTTP Endpoints',
  },
  {
    type: 'doc',
    route: '/docs/userguide/exceptions',
    label: 'Monitroing Exceptions',
  },
  {
    label: 'Security & Compliance',
    type: 'category',
    // route: '',
    items: [
      //     'userguide/overview',
      {
        type: 'doc',
        route: '/docs/userguide/authentication',
        label: 'Authentication',
      },
      {
        type: 'doc',
        route: '/docs/userguide/sso-authentication',
        label: 'SSO & SAML',
      },
      {
        type: 'doc',
        route: '/docs/userguide/retention-period',
        label: 'Retention Period',
      },
      {
        type: 'doc',
        route: '/docs/userguide/otlp-http-enable-cors',
        label: 'CORS in OTLP HTTP Receiver',
      },
    ],
  },
  {
    label: 'Tutorials',
    type: 'category',
    route: '/docs/tutorials',
    // link: {
    // type: 'generated-index',
    // title: 'Tutorials',
    // description:
    // 'SigNoz tutorials are step-by-step training exercises that guide you through monitoring your applications and infrastructure.',
    // route: '/docs/tutorial/tutorials',
    // },
    items: [
      {
        type: 'doc',
        route: '/docs/tutorial/jvm-metrics',
        label: 'Spring Boot JVM Metrics',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/jmx-metrics',
        label: 'JMX Metrics',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/mongodb-metrics',
        label: 'MongoDB Metrics',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/instrumenting-angular-frontend',
        label: 'Instrumenting Angular Frontend Web App',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/s3-integration-iam-role-eks',
        label: 'S3 Integration With AWS IAM role in EKS',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/oci-bucket-cold-storage-integration',
        label: 'OCI Bucket Cold Storage Integration',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/opentelemetry-operator-usage',
        label: 'OpenTelemetry Operator Usage',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/setting-up-tls-for-signoz',
        label: 'Secure SigNoz in Kubernetes using Ingress-NGINX and Cert-Manager',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/setting-up-sso-saml-with-keycloak',
        label: 'Setting Up SSO SAML 2.0 With Keycloak',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/writing-clickhouse-queries-in-dashboard',
        label: 'ClickHouse queries for building dashboards and alerts',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/traefik-observability',
        label: 'Traefik Observability',
      },
      {
        type: 'doc',
        route: '/docs/tutorial/infinite-retention-aws-s3',
        label: 'Infinite Retention using AWS S3',
      },
    ],
  },
  {
    label: 'AWS Monitoring',
    type: 'category',
    // route: '',
    items: [
      //'aws/getting-started',
      {
        type: 'category',
        label: 'EC2',
        route: '/docs/ec2-monitoring',
        // link: {
        // type: 'generated-index',
        // title: 'EC2 Monitoring',
        // slug: '/docs/ec2-monitoring',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/aws-monitoring/ec2-logs',
            label: 'Application/Server logs',
          },
          {
            type: 'doc',
            route: '/docs/aws-monitoring/ec2-infra-metrics',
            label: 'Infrastructure Metrics',
          },
        ],
      },
      {
        type: 'category',
        label: 'ECS',
        route: '/docs/ecs-monitoring',
        // link: {
        // type: 'generated-index',
        // title: 'ECS Monitoring',
        // slug: '/docs/ecs-monitoring',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/aws-monitoring/ecs-ec2-external',
            label: 'EC2/External',
          },
          {
            type: 'doc',
            route: '/docs/aws-monitoring/ecs-fargate',
            label: 'Fargate',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/aws-monitoring/elb-logs',
        label: 'ELB',
      },
      {
        type: 'doc',
        route: '/docs/aws-monitoring/vpc-logs',
        label: 'VPC',
      },
      {
        type: 'doc',
        route: '/docs/aws-monitoring/rds-logs',
        label: 'RDS',
      },
      {
        type: 'doc',
        route: '/docs/aws-monitoring/lambda-logs',
        label: 'AWS Lambda',
      },
    ],
  },
  {
    label: 'Azure Monitoring',
    type: 'category',
    className: 'new-doc',
    // route: '',
    items: [
      {
        type: 'category',
        label: 'Bootstrapping',
        route: '/docs/azure-monitoring/bootstrapping',
        // link: {
        // type: 'generated-index',
        // title: 'EC2 Monitoring',
        // slug: '/docs/ec2-monitoring',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/bootstrapping/strategy',
            label: 'Strategy',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/bootstrapping/collector-setup',
            label: 'Central Collector Setup',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/bootstrapping/data-ingestion',
            label: 'EventHub Streaming Ingestion',
          },
        ],
      },
      {
        type: 'category',
        label: 'Virtual Machines',
        route: '/docs/azure-monitoring/virtual-machines',
        // link: {
        // type: 'generated-index',
        // title: 'ECS Monitoring',
        // slug: '/docs/ecs-monitoring',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/virtual-machines/vm-metrics',
            label: 'VM Host Metrics & Logging',
          },
        ],
      },
      {
        type: 'category',
        label: 'App Service',
        route: '/docs/azure-monitoring/app-service',
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/app-service/metrics',
            label: 'Metrics',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/app-service/logging',
            label: 'Logging',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/app-service/tracing',
            label: 'APM & Tracing',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/azure-monitoring/aks',
        label: 'AKS',
      },
      {
        type: 'category',
        label: 'Azure Container Apps',
        route: '/docs/azure-monitoring/az-container-app',
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-container-apps/logging',
            label: 'Logging',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-container-apps/metrics',
            label: 'Metrics',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-container-apps/tracing',
            label: 'APM & Tracing ',
          },
        ],
      },
      {
        type: 'category',
        label: 'Azure Functions',
        route: '/docs/azure-monitoring/az-fns',
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-fns/metrics',
            label: 'Metrics',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-fns/logging',
            label: 'Logging',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-fns/tracing',
            label: 'APM & Tracing ',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/azure-monitoring/db-metrics',
        label: 'SQL Database Metrics',
      },
      {
        type: 'category',
        label: 'Azure Blog Storage',
        route: '/docs/azure-monitoring/az-blob-storage',
        items: [
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-blob-storage/metrics',
            label: 'Metrics',
          },
          {
            type: 'doc',
            route: '/docs/azure-monitoring/az-blob-storage/logging',
            label: 'Logging',
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Operate Self-Hosted SigNoz',
    route: '/docs/operate',
    // link: {
    // type: 'generated-index',
    // title: 'Operate',
    // description:
    // 'The following sections provide an overview of the activities that are required to successfully operate SigNoz. Based on your environment, proceed to one of the sections below.',
    // slug: '/docs/operate',
    // },
    items: [
      {
        type: 'doc',
        route: '/docs/operate/configuration',
        label: 'Configuration',
      },
      {
        type: 'doc',
        route: '/docs/operate/docker-standalone',
        label: 'Docker Standalone',
      },
      {
        type: 'doc',
        route: '/docs/operate/docker-swarm',
        label: 'Docker Swarm',
      },
      {
        type: 'doc',
        route: '/docs/operate/kubernetes',
        label: 'Kubernetes',
      },
      {
        type: 'category',
        label: 'Migration Guides',
        route: '/docs/operate/migration',
        // link: {
        // type: 'generated-index',
        // title: 'Migration Guides',
        // description:
        // 'The following sections provide instructions to migrate SigNoz components across newer versions. You need to run these migration scripts step by step. For example if you are currently on `0.8.2` and want to migrate to `0.10.0` - you need to run migration script for `0.9` first and then `0.10`',
        // slug: '/docs/operate/migration/migration',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.45',
            label: 'Upgrade to v0.45',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.38',
            label: 'Upgrade to v0.38',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.36',
            label: 'Upgrade to v0.36',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.27',
            label: 'Upgrade to v0.27',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.23',
            label: 'Upgrade to v0.23',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.19',
            label: 'Upgrade to v0.19',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.12',
            label: 'Upgrade to v0.12',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.10',
            label: 'Upgrade to v0.10',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.9',
            label: 'Upgrade to v0.9',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.8.1',
            label: 'Upgrade to v0.8.1',
          },
          {
            type: 'doc',
            route: '/docs/operate/migration/upgrade-0.8.0',
            label: 'Upgrade to v0.8.0',
          },
        ],
      },
      {
        type: 'category',
        label: 'ClickHouse',
        route: '/docs/operate/clickhouse',
        // link: {
        // type: 'generated-index',
        // title: 'ClickHouse',
        // description:
        // 'The following sections provide instructions to operate ClickHouse. Based on your environment, proceed to one of the sections below.',
        // slug: '/operate/clickhouse/clickhouse',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/operate/clickhouse/increase-clickhouse-pv',
            label: 'Increase ClickHouse PV',
          },
          {
            type: 'doc',
            route: '/docs/operate/clickhouse/connect-to-clickhouse',
            label: 'Connect to ClickHouse',
          },
          {
            type: 'doc',
            route: '/docs/operate/clickhouse/distributed-clickhouse',
            label: 'Distributed ClickHouse',
          },
          {
            type: 'doc',
            route: '/docs/operate/clickhouse/external-clickhouse',
            label: 'External ClickHouse',
          },
        ],
      },
      {
        type: 'category',
        label: 'Query Service',
        route: '/docs/operate/query-service',
        // link: {
        // type: 'generated-index',
        // title: 'Query Service',
        // description:
        // 'The following sections provide instructions to operate Query Service. You can proceed to one of the sections below.',
        // slug: '/docs/operate/query-service',
        // },
        items: [
          {
            type: 'doc',
            route: '/docs/operate/query-service/reset-admin-password',
            label: 'Reset Admin Password',
          },
          {
            type: 'doc',
            route: '/docs/operate/query-service/user-invitation-smtp',
            label: 'Enable SMTP for User Invitations',
          },
        ],
      },
      {
        type: 'doc',
        route: '/docs/operate/feature-flags/',
        label: 'Feature Flags',
      },
      {
        type: 'doc',
        route: '/docs/production-readiness',
        label: 'Best Practices for Production',
      },
    ],
  },
  {
    type: 'category',
    label: 'About SigNoz',
    items: [
      {
        route: '/docs/architecture',
        label: 'Technical Architecture',
        type: 'doc',
      },
      {
        route: '/docs/contributing',
        label: 'Contributing Guidelines',
        type: 'doc',
      },
      {
        route: '/docs/roadmap',
        label: 'Product Roadmap',
        type: 'doc',
      },
      // 'about-signoz/architecture',
      // 'about-signoz/contributing',
      // 'about-signoz/roadmap',
    ],
  },
  {
    route: '/docs/community/llm-monitoring',
    label: 'LLM Monitoring',
    type: 'doc',
    className: 'new-doc',
  },
  {
    label: 'Community',
    type: 'category',
    items: [
      {
        route: '/docs/community/community-integrations',
        type: 'doc',
        label: 'Community Integrations',
      },
      {
        label: 'Community Channels',
        route: '/docs/community',
        type: 'doc',
      },
    ],
  },

  {
    label: 'Troubleshooting',
    type: 'category',
    route: '/docs/faqs',
    // link: {
    // type: 'generated-index',
    // title: 'Frequently Asked Questions',
    // description:
    // 'Find the most commonly questions about SigNoz Installation, Instrumentation, Features, Troubleshooting, and Contributing here:',
    // slug: '/docs/faqs/faq',
    // },
    items: [
      {
        label: 'SigNoz Cloud',
        type: 'category',
          items: [{
            type: 'doc',
            route: '/docs/troubleshooting/signoz-cloud/general-troubleshooting',
            label: 'General Troubleshooting',
          },
          {
            type: 'doc',
            route: '/docs/troubleshooting/signoz-cloud/traces-troubleshooting',
            label: 'Traces Troubleshooting',
          },
          {
            type: 'doc',
            route: '/docs/troubleshooting/signoz-cloud/logs-troubleshooting',
            label: 'Logs Troubleshooting',
          },
          {
            type: 'doc',
            route: '/docs/troubleshooting/signoz-cloud/metrics-troubleshooting',
            label: 'Metrics Troubleshooting',
          },
        ],
      },
    ],
  },
  {
    label: 'FAQ',
    type: 'category',
    route: '/docs/faqs',
    // link: {
    // type: 'generated-index',
    // title: 'Frequently Asked Questions',
    // description:
    // 'Find the most commonly questions about SigNoz Installation, Instrumentation, Features, Troubleshooting, and Contributing here:',
    // slug: '/docs/faqs/faq',
    // },
    items: [
      {
        type: 'doc',
        route: '/docs/faqs/product',
        label: 'Product - FAQs',
      },
      {
        type: 'doc',
        route: '/docs/faqs/troubleshooting',
        label: 'Troubleshooting - FAQs',
      },
      {
        type: 'doc',
        route: '/docs/faqs/instrumentation',
        label: 'Instrumentation - FAQs',
      },
      {
        type: 'doc',
        route: '/docs/faqs/installation',
        label: 'Installation - FAQs',
      },
    ],
  },
  {
    label: 'Others',
    type: 'category',
    items: [
      {
        type: 'doc',
        route: '/docs/telemetry',
        label: 'Telemetry',
      },
    ],
  },
]

export default docsSideNav
