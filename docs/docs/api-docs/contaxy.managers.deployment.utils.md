<!-- markdownlint-disable -->

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `contaxy.managers.deployment.utils`




**Global Variables**
---------------
- **DEFAULT_DEPLOYMENT_ACTION_ID**
- **NO_LOGS_MESSAGE**

---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L52"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `map_labels`

```python
map_labels(labels: Dict[str, Any]) → MappedLabels
```

Transform label dict to a MappedLabels object. 

Special labels have their own field and additional, non-special labels are added to the MappedLabels.metadata field. 



**Args:**
 
 - <b>`labels`</b> (dict):  A dictionary containing key-value pairs that, for example, are used as container labels. 



**Returns:**
 
 - <b>`MappedLabels`</b>:  The labels object transformed to a MappedLabels object. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L96"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `clean_labels`

```python
clean_labels(labels: Optional[dict] = None) → dict
```

Remove system labels that should not be settable by the user. 



**Args:**
 
 - <b>`labels`</b> (Optional[dict]):  The labels dict from which system labels should be removed. 



**Returns:**
 
 - <b>`dict`</b>:  The new labels dict that does not contain any system labels or an empty dict. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L137"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_deployment_id`

```python
get_deployment_id(
    project_id: str,
    deployment_name: str,
    deployment_type: DeploymentType
) → str
```

Returns a valid deployment ID based on some specified metadata. 



**Args:**
 
 - <b>`project_id`</b> (str):  The ID of the project associated with the deployment. 
 - <b>`deployment_name`</b> (str):  The name of the deployment. This can be an arbitrary text. 
 - <b>`deployment_type`</b> (DeploymentType):  The type of the deployment. 



**Returns:**
 
 - <b>`str`</b>:  A valid deployment ID. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L170"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_volume_name`

```python
get_volume_name(project_id: str, service_id: str) → str
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L175"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_network_name`

```python
get_network_name(project_id: str) → str
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L179"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_label_string`

```python
get_label_string(key: str, value: str) → str
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L183"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_gpu_info`

```python
get_gpu_info() → int
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L199"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_project_selection_labels`

```python
get_project_selection_labels(
    project_id: str,
    deployment_type: DeploymentType = <DeploymentType.SERVICE: 'service'>
) → List
```

Return a list of labels identifying project resources (system namespace, project id, deployment type). 



**Args:**
 
 - <b>`project_id`</b> (str):  The project id included in the label list. 
 - <b>`deployment_type`</b> (DeploymentType, optional):  The deployment type included in the label list. Defaults to DeploymentType.SERVICE. 



**Returns:**
 
 - <b>`List`</b>:  Contains the labels identifying project resources. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L218"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `map_endpoints_to_endpoints_label`

```python
map_endpoints_to_endpoints_label(
    endpoints: Optional[List[str]]
) → Union[str, NoneType]
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L222"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `map_endpoints_label_to_endpoints`

```python
map_endpoints_label_to_endpoints(
    endpoints_label: Optional[str]
) → Union[List[str], NoneType]
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L228"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_default_environment_variables`

```python
get_default_environment_variables(
    project_id: str,
    deployment_id: str,
    endpoints: Optional[List[str]] = None,
    compute_resources: Optional[DeploymentCompute] = None
) → Dict[str, str]
```

Sets default environment variables that should be set for each container. 



**Args:**
 
 - <b>`project_id`</b> (str):  The project id included in the label list deployment_id (str) 
 - <b>`endpoints`</b> (List[str]):  List of endpoints 
 - <b>`compute_resources`</b>:  (Optional[DeploymentCompute]): DeploymentCompute information 



**Returns:**
 
 - <b>`Dict[str, str]`</b>:  Dict with default environment variables or empty dict. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L275"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `replace_template_string`

```python
replace_template_string(
    input: str = '',
    templates_mapping: Dict[str, str] = {}
) → str
```

Return the input with replaced value according to the templates mapping. 

For example, if `template = "{env.CONTAXY_BASE_URL}"` and `values = { "{env.CONTAXY_BASE_URL}": "some-value" } }`, the result will be `"some-value"` 



**Args:**
 
 - <b>`input`</b> (str):  The string that should be checked against the values dict and probably replaced by a match. 
 - <b>`templates_mapping`</b> (Dict[str, str]):  The dict that contains template-strings with corresponding values. 



**Returns:**
 
 - <b>`str`</b>:  The string with the replaced value or the unmodified string in case of no match. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L301"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `replace_templates`

```python
replace_templates(
    input: Dict[str, str] = {},
    template_mapping: Dict[str, str] = {}
) → Dict[str, str]
```

Returns the input dict where those values that are matching template strings are replaced. 



**Args:**
 
 - <b>`input`</b> (Dict[str, str]):  The input dict for which the values should be checked for matching template replacements. 
 - <b>`templates_mapping`</b> (Dict[str, str]):  The dict that contains template-strings with corresponding values. 



**Returns:**
 
 - <b>`Dict[str, str]`</b>:  A copy of the modified input dict where the template literals are replaced. 


---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L324"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_template_mapping`

```python
get_template_mapping(
    project_id: Optional[str] = None,
    user_id: Optional[str] = None,
    service_url: Optional[str] = None
) → Dict[str, str]
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L353"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `split_image_name_and_tag`

```python
split_image_name_and_tag(full_image_name: str) → Tuple[str, str]
```






---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L25"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `Labels`
An enumeration. 





---

<a href="https://github.com/ml-tooling/contaxy/blob/main/backend/src/contaxy/managers/deployment/utils.py#L40"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `MappedLabels`










---

_This file was automatically generated via [lazydocs](https://github.com/ml-tooling/lazydocs)._