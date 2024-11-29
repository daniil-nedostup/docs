import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade KubeRocketCI v3.9 to 3.10

:::important
  We suggest backing up the KubeRocketCI environment before starting the upgrade procedure.
:::

This section provides detailed instructions for upgrading KubeRocketCI to version 3.10. Follow the steps and requirements outlined below:

1. Update Custom Resource Definitions (CRDs). Run the following command to apply all necessary CRDs to the cluster:

    ```bash
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_cdstagedeployments.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebasebranches.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebaseimagestreams.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_codebases.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_gitservers.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_jiraissuemetadatas.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-codebase-operator/v2.24.0/deploy-templates/crds/v2.edp.epam.com_jiraservers.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.21.0/deploy-templates/crds/v2.edp.epam.com_cdpipelines.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-cd-pipeline-operator/v2.21.0/deploy-templates/crds/v2.edp.epam.com_stages.yaml
    ```

2. (Optional) If you are using the **Gerrit Operator**, update the necessary CRDs for Gerrit. Run the following command to apply the necessary CRDs to the cluster:

    ```bash
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritgroupmembers.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritgroups.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritmergerequests.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritprojectaccesses.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritprojects.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerritreplicationconfigs.yaml
    kubectl apply -f https://raw.githubusercontent.com/epam/edp-gerrit-operator/v2.22.0/deploy-templates/crds/v2.edp.epam.com_gerrits.yaml
    ```

3. (Optional) Update Tekton Pipeline labels:

    In version 3.10, Tekton pipelines require specific labels indicating their type: **build**, **review**, **clean**, or **deploy**. These labels enable **Portal UI** to correctly display pipeline data.

    Below are examples of the required labels for each pipeline type:

    - **Build Pipeline**
        ```yaml
        metadata:
          name: build
          labels:
            app.edp.epam.com/pipelinetype: build
        ```
    - **Review Pipeline**
        ```yaml
        metadata:
          name: review
          labels:
            app.edp.epam.com/pipelinetype: review
        ```
    - **Clean Pipeline**
        ```yaml
        metadata:
          name: clean
          labels:
            app.edp.epam.com/pipelinetype: clean
        ```
    - **Deploy Pipeline**
        ```yaml
        metadata:
          name: deploy
          labels:
            app.edp.epam.com/pipelinetype: deploy
        ```

    :::note
    For any custom Tekton pipelines created in earlier versions, ensure that each pipeline has the appropriate label to maintain compatibility.
    :::

    To label an existing custom pipeline, you can use the following command as a reference:

    ```bash
    kubectl label pipeline <pipeline-name> app.edp.epam.com/pipelinetype=<build | review | deploy> -n <krci-namespace>
    ```

4. (Optional) Migrate Git providers credentials to a new AWS Parameter Store object:

    :::note
    In version 3.9.0, Git providers credentials were included in the `manageEDPInstallSecretsName` object in AWS Parameter Store. However, due to character limit restrictions, these credentials should now be migrated to a dedicated AWS Parameter Store object named `manageGitProviderSecretsName`.
    :::

    If you are using the **External Secret Operator** to manage secrets, specify a new field in the `values.yaml` file: `manageGitProviderSecretsName`. This field should be defined as follows:

        <Tabs
      defaultValue="3.10"
      values={[
        {label: '3.9', value: '3.9'},
        {label: '3.10', value: '3.10'}
      ]}>

      <TabItem value="3.9">
      ```yaml title="values.yaml"
      externalSecrets:
        enabled: true
        ...
        manageEDPInstallSecretsName: /infra/core/addons/kuberocketci
      ```
      </TabItem>

      <TabItem value="3.10">
      ```yaml title="values.yaml"
      externalSecrets:
        enabled: true
        ...
        manageEDPInstallSecretsName: /infra/core/addons/kuberocketci
        manageGitProviderSecretsName: /infra/core/addons/kuberocketci-git-provider-secrets
      ```
      </TabItem>
    </Tabs>

   Below is an example of the object structure for `manageGitProviderSecretsName`:

        ```json
        {
          "github-config": {
            "id_rsa": "LS0tLS1...",
            "token": "ghp_fdO1joO...",
            "secretString": "kfr1ndk4..."
          },
          "gitlab-config": {
            "id_rsa": "LS0tLS1...",
            "token": "RW1UG2EAdEjPEC1NSoVm3A",
            "secretString": "kfr1ndk4..."
          },
          "bitbucket-config": {
            "id_rsa": "LS0tLS1...",
            "token": "YXV0b19lcG1kLWVkc...",
            "secretString": "kfr1ndk4..."
          }
        }
        ```

5. (Optional) Enable Code Quality Widgets:

    :::note
    Starting from version 3.10, KrakenD is used to manage Code Quality widgets in Portal UI. This migration simplifies the integration with third-party APIs, improves performance, and provides a scalable, flexible API gateway.
    :::

    By default, in version 3.10, Code Quality widgets are disabled. To enable them, follow these steps:

    1. **Install KrakenD**: For detailed installation instructions, refer to the [KrakenD installation guide](../../../version-3.10/operator-guide/extensions/krakend.md).
    2. **Configure the `values.yaml` file**: In the **edp-install** chart, set the `apiGatewayUrl` key to specify the API URL of KrakenD as configured during its installation.

        ```yaml title="values.yaml"
        global:
          apiGatewayUrl: "https://api.example.com"
        ```

6. (Optional) Migrate SSO (OAuth2-proxy) configuration:

    :::danger
    Starting from version 3.10, the platform no longer supports setting single sign-on (SSO) configuration through the `edp-install` chart. This includes the installation of the `oauth2-proxy` component and the creation of required Keycloak resources.
    :::

    Deprecated fields in `values.yaml` file for SSO configuration are listed below:

    <details>
    <summary><b>View: Deprecated fields in values.yaml</b></summary>

    ```yaml
    sso:
      # -- Install OAuth2-proxy and Keycloak CRs as a part of EDP deployment.
      enabled: false

      keycloakOperatorResources:
        # Set to false if using the add-ons approach (refer to https://github.com/epam/edp-cluster-add-ons)
        # for EDP installation and if the extension-oidc is already installed.
        # This prevents the creation of an additional Keycloak resource and secret.
        # The 'kind' and 'name' must be specified in case of using an existing Keycloak/ClusterKeycloak resource.
        # Create kind: Keycloak as a part of chart installation
        createKeycloakCR: true
        # Can be Keycloak or ClusterKeycloak.
        kind: Keycloak
        # Name of kind: Keycloak/ClusterKeycloak CR.
        name: main

      # -- Defines the Keycloak realm name, which by default is named after the namespace where EDP is deployed.
      # realmName: edp
      # -- Defines Keycloak sso realm name that is used as the Identity Provider (IdP) realm
      ssoRealmName: "broker"
      # -- Defines Keycloak client name that is used for the Identity Provider (IdP) client
      ssoClientName: "edp"
      # -- Keycloak URL.
      keycloakUrl: https://keycloak.example.com/auth
      # -- Administrators of your tenant.
      admins:
        - "stub_user_one@example.com"
      # -- Developers of your tenant
      developers:
        - "stub_user_one@example.com"
        - "stub_user_two@example.com"

      # Oauth2-proxy image
      image:
        # -- OAuth2-proxy image repository
        repository: quay.io/oauth2-proxy/oauth2-proxy
        # -- OAuth2-proxy image tag
        tag: v7.4.0

      # Create a cookie-secret with the following command:
      # 'openssl rand -base64 32 | head -c 32 | base64'
      # Use an existing secret for OAuth2 cookie-secret
      existingSecret:
        # -- Secret name which stores cookie-secret
        secretName: oauth2-proxy-cookie-secret
        # -- Secret key which stores cookie-secret
        secretKey: cookie-secret

      # -- Additional container environment variables
      extraEnv: []
      # -- Extra arguments to provide to the OAuth2-proxy
      extraArgs: {}

      # -- Additional volumes to be added to the OAuth2-proxy pod
      extraVolumes: []
      #  - name: custom-ca
      #    secret:
      #      defaultMode: 420
      #      secretName: custom-ca

      # -- Additional volumeMounts to be added to the OAuth2-proxy container
      extraVolumeMounts: []
      #  - name: custom-ca
      #    mountPath: /etc/ssl/certs/CA.crt
      #    readOnly: true
      #    subPath: CA.crt

      ingress:
        # -- Enable ingress controller resource
        enabled: true
        # -- Additional ingress annotations
        annotations: {}
        # -- Ingress path type. One of `Exact`, `Prefix` or `ImplementationSpecific`
        pathType: Prefix

        # For Kubernetes >= 1.18 you should specify the ingress-controller via the field ingressClassName
        # Ref: https://kubernetes.io/blog/2020/04/02/improvements-to-the-ingress-api-in-kubernetes-1.18/#specifying-the-class-of-an-ingress
        # -- Defines which ingress controller will implement the resource, e.g. nginx
        ingressClassName: ""
        # -- Ingress TLS configuration
        tls: []
        #  - secretName: chart-example-tls
        #    hosts:
        #      - chart-example.local
      # -- Node labels for pod assignment
      nodeSelector: {}
      # -- Toleration labels for pod assignment
      tolerations: []
      # -- Affinity settings for pod assignment
      affinity: {}
      ```

      </details>

    If you previously used SSO configuration section, follow these migration steps:

    1. Manually remove all Keycloak resources previously created by the **edp-install** chart. The list of resources to remove can be found [here](https://github.com/epam/edp-install/tree/v3.9.0/deploy-templates/templates/keycloak).
       Remove the resources sequentially, following the specified deletion order. Sample commands for deleting Keycloak resources are provided below:
       ```bash
       kubectl delete keycloakclient gerrit -n <krci-namespace>
       kubectl delete keycloakclient oauth2-proxy -n <krci-namespace>
       kubectl delete keycloakclientscope edp -n <krci-namespace>
       kubectl delete keycloakrealmrole default-roles-administrator -n <krci-namespace>
       kubectl delete keycloakrealmrole default-roles-developer -n <krci-namespace>
       kubectl delete keycloakrealmrolebatch default-roles -n <krci-namespace>
       kubectl delete keycloakauthflow keycloakauthflow-browser -n <krci-namespace>
       kubectl delete keycloakrealmidentityprovider broker-idp -n <krci-namespace>
       kubectl delete keycloakrealm main -n <krci-namespace>
       kubectl delete keycloak keycloak -n <krci-namespace>
       ```

    2. Review and configure the [kuberocketci-rbac](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac) chart in the add-ons repository.
       Set the required values in the `values.yaml` file and install the chart. Verify that all necessary [Keycloak resources](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/kuberocketci-rbac/templates) have been successfully created in Keycloak.
    3. Review and configure the [oauth2-proxy](https://github.com/epam/edp-cluster-add-ons/tree/main/clusters/core/addons/oauth2-proxy) chart in the add-ons repository.
       Set the required values in the `values.yaml` file and install the chart. Ensure that **oauth2-proxy** is running correctly.
    4. Once the **kuberocketci-rbac** and **oauth2-proxy** charts are installed and verified, proceed with upgrading the platform to version 3.10.

7. (Optional) Update the OIDC Integration section for **edp-headlamp** chart:

    In version 3.10, the OpenID Connect (OIDC) section for the **edp-headlamp** chart has been modified. Certain fields have been renamed or removed. For example, the `keycloakUrl` field has been renamed to `issuerUrl`, and the `issuerRealm` field is no longer required.
    Refer to the example values configurations below for versions 3.9 and 3.10 to identify the fields that need to be modified for compatibility:

    <Tabs
      defaultValue="3.9"
      values={[
        {label: '3.9', value: '3.9'},
        {label: '3.10', value: '3.10'}
      ]}>

      <TabItem value="3.9">
      ```yaml title="values.yaml"
      edp-headlamp:
        enabled: true
        ...
        config:
          oidc:
            enabled: true
            keycloakUrl: "https://keycloak.example.com"
            clientID: ""
            clientSecretName: "keycloak-client-headlamp-secret"
            clientSecretKey: "clientSecret"
            issuerRealm: ""
            scopes: ""
      ```
      </TabItem>

      <TabItem value="3.10">
      ```yaml title="values.yaml"
      edp-headlamp:
        enabled: true
        ...
        config:
          oidc:
            enabled: true
            issuerUrl: "https://keycloak.example.com/auth/realms/<realm_name>"
            clientID: ""
            clientSecretName: "keycloak-client-headlamp-secret"
            clientSecretKey: "clientSecret"
            scopes: ""
      ```
      </TabItem>
    </Tabs>

8. (Optional) Update Gerrit configuration:

    Update the following configuration for the **gerrit-operator** section in `values.yaml`:

    1. Update the `extraEnv` variable. Modify the `OAUTH_KEYCLOAK_CLIENT_ID` value to follow the format: `gerrit-<KRCI_NAMESPACE_NAME>`.

        ```yaml title="values.yaml"
        gerrit-operator:
          enabled: true
          ...
          gerrit:
            extraEnv:
              - name: OAUTH_KEYCLOAK_CLIENT_ID
                value: gerrit-<KRCI_NAMESPACE_NAME>
        ```

    2. Specify the Single Sign-on (SSO) configuration. Ensure the SSO configuration is defined as follows:
        ```yaml title="values.yaml"
        sso:
          enabled: true
          keycloakUrl: https://keycloak.example.com
          kind: ClusterKeycloakRealm
          name: main
         ```

9. (Optional) Enable Tekton Dashboard:

    Starting from version 3.10, the **Tekton Dashboard** is disabled by default. To enable it, set the following configuration in the `values.yaml` file:

    ```yaml title="values.yaml"
    edp-tekton:
      enabled: true
      ...
      dashboard:
        enabled: true
    ```

10. To upgrade KubeRocketCI to the v3.10, run the following command:

     ```bash
     helm upgrade krci epamedp/edp-install -n krci --values values.yaml --version=3.10.2
     ```

     :::note
       To verify the installation, you can test the deployment before applying it to the cluster with the `--dry-run` key:
       `helm upgrade krci epamedp/edp-install -n krci --values values.yaml --version=3.10.2 --dry-run`
     :::