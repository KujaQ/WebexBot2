const urlflow = "https://webexapis.com/v1/authorize?client_id=C06c3eff2130928e1eda4d75e9d68602122f39bc04bd4dcf38256e030b185a85a&response_type=code&redirect_uri=https%3A%2F%2Fkujaq.github.io%2FWebexBot2%2F&scope=Identity%3Acontact%20Identity%3Aone_time_password%20analytics%3Aread_all%20audit%3Aevents_read%20identity%3Agroups_read%20identity%3Agroups_rw%20identity%3Aplaceonetimepassword_create%20identity%3Atokens_read%20identity%3Atokens_write%20meeting%3Aadmin_config_read%20meeting%3Aadmin_config_write%20meeting%3Aadmin_participants_read%20meeting%3Aadmin_preferences_read%20meeting%3Aadmin_preferences_write%20meeting%3Aadmin_recordings_read%20meeting%3Aadmin_recordings_write%20meeting%3Aadmin_schedule_read%20meeting%3Aadmin_schedule_write%20meeting%3Aadmin_transcripts_read%20meeting%3Acontrols_read%20meeting%3Acontrols_write%20meeting%3Aparticipants_read%20meeting%3Aparticipants_write%20meeting%3Apreferences_read%20meeting%3Apreferences_write%20meeting%3Arecordings_read%20meeting%3Arecordings_write%20meeting%3Aschedules_read%20meeting%3Aschedules_write%20meeting%3Atranscripts_read%20spark-admin%3Abroadworks_billing_reports_read%20spark-admin%3Abroadworks_billing_reports_write%20spark-admin%3Abroadworks_enterprises_read%20spark-admin%3Abroadworks_enterprises_write%20spark-admin%3Abroadworks_subscribers_read%20spark-admin%3Abroadworks_subscribers_write%20spark-admin%3Acall_qualities_read%20spark-admin%3Acalling_cdr_read%20spark-admin%3Adevices_read%20spark-admin%3Adevices_write%20spark-admin%3Ahybrid_clusters_read%20spark-admin%3Ahybrid_connectors_read%20spark-admin%3Alicenses_read%20spark-admin%3Alocations_read%20spark-admin%3Alocations_write%20spark-admin%3Aorganizations_read%20spark-admin%3Aorganizations_write%20spark-admin%3Apeople_read%20spark-admin%3Apeople_write%20spark-admin%3Aplaces_read%20spark-admin%3Aplaces_write%20spark-admin%3Aresource_group_memberships_read%20spark-admin%3Aresource_group_memberships_write%20spark-admin%3Aresource_groups_read%20spark-admin%3Aroles_read%20spark-admin%3Atelephony_config_read%20spark-admin%3Atelephony_config_write%20spark-admin%3Avideo_mesh_api_read%20spark-admin%3Avideo_mesh_api_webhook_write%20spark-admin%3Avideo_mesh_api_write%20spark-admin%3Awholesale_billing_reports_read%20spark-admin%3Awholesale_billing_reports_write%20spark-admin%3Awholesale_customers_read%20spark-admin%3Awholesale_customers_write%20spark-admin%3Awholesale_sub_partners_read%20spark-admin%3Awholesale_sub_partners_write%20spark-admin%3Awholesale_subscribers_read%20spark-admin%3Awholesale_subscribers_write%20spark-admin%3Aworkspace_locations_read%20spark-admin%3Aworkspace_locations_write%20spark-admin%3Aworkspace_metrics_read%20spark-admin%3Aworkspaces_read%20spark-admin%3Aworkspaces_write%20spark-compliance%3Aevents_read%20spark-compliance%3Ameetings_read%20spark-compliance%3Ameetings_write%20spark-compliance%3Amemberships_read%20spark-compliance%3Amemberships_write%20spark-compliance%3Amessages_read%20spark-compliance%3Amessages_write%20spark-compliance%3Arecordings_read%20spark-compliance%3Arecordings_write%20spark-compliance%3Arooms_read%20spark-compliance%3Arooms_write%20spark-compliance%3Ateam_memberships_read%20spark-compliance%3Ateam_memberships_write%20spark-compliance%3Ateams_read%20spark-compliance%3Awebhooks_read%20spark-compliance%3Awebhooks_write%20spark%3Aall%20spark%3Acalls_read%20spark%3Acalls_write%20spark%3Adevices_read%20spark%3Adevices_write%20spark%3Akms%20spark%3Aorganizations_read%20spark%3Apeople_write%20spark%3Aplaces_read%20spark%3Aplaces_write%20spark%3Atelephony_config_read%20spark%3Atelephony_config_write%20spark%3Awebrtc_calling%20spark%3Axapi_commands%20spark%3Axapi_statuses&state=set_state_here";
const clientId = "C06c3eff2130928e1eda4d75e9d68602122f39bc04bd4dcf38256e030b185a85a";
const clientSecret = "1264d72ce05fa76a4eb797dd007e4039ca10b90fe5777e47eb99a36aa47ef7e8";

function testflow2() {
    window.location.href = urlflow
}

function testflow3() {
    // Get the current URL
    const currentUrl = window.location.href;
    console.log("🚀 ~ file: integration.js:10 ~ testflow3 ~ currentUrl:", currentUrl)

    // Create a URLSearchParams object with the current URL
    const urlParams = new URLSearchParams(currentUrl);

    // Get the value of a specific query parameter
    const parameterValue = urlParams.get('https://kujaq.github.io/WebexBot2/?code');

    // Check if the parameter value exists
    if (parameterValue !== null) {
        console.log('Parameter Value:', parameterValue);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://webexapis.com/v1/access_token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${parameterValue}&redirect_uri=https://kujaq.github.io/WebexBot2/`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    } else {
        console.log('Parameter not found or has no value.');
    }
}