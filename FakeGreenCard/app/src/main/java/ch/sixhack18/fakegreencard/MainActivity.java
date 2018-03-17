package ch.sixhack18.fakegreencard;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import static android.provider.ContactsContract.CommonDataKinds.Website.URL;

public class MainActivity extends AppCompatActivity {

    private static final String endpoint = "https://psd2-api.openbankproject.com/";
    private static final String endpointExtra = "obp/v2.0.0/";
    private static final String DL_Consumer_KEY = "qzf3tklrpv5zok0rx4trn3jhb1glrfo4ku013kdx";
    private static final String user = "Tar-Tarus";
    private static final String pass = "olOYloxhDywUf4XyI";
    private static String token = "";
    private static String bank = "psd201-bank-x--uk";
    private static String account = "IgorFluffyAccount";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        TextView balAmount = (TextView) findViewById(R.id.BalanceAmount);


        URL url = null;
        try {
            url = new URL(endpoint + "my/logins/direct");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        HttpURLConnection urlConnection = null;
        try {
            assert url != null;
            urlConnection = (HttpURLConnection) url.openConnection();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            assert urlConnection != null;
            urlConnection.setRequestMethod("POST");
        } catch (ProtocolException e) {
            e.printStackTrace();
        }

        String baseAuthStr = "username=" + user + ",   password=" + pass + ",  consumer_key=" + DL_Consumer_KEY;
        urlConnection.addRequestProperty("Authorization", "DirectLogin " + baseAuthStr);
        urlConnection.addRequestProperty("Content-Type", "application/json; charset=UTF-8");

        try {
            urlConnection.connect();
        } catch (IOException e) {
            e.printStackTrace();
        }

        String result = "";
        try {
            String json_response = "";
            InputStreamReader in = new InputStreamReader(urlConnection.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String text = "";
            while ((text = br.readLine()) != null) {
                json_response += text;
            }
            result = json_response.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            urlConnection.disconnect();
        }

        JSONObject jObject = null;
        try {
            jObject = new JSONObject(result);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        try {
            assert jObject != null;
            token = jObject.getString("token");
        } catch (JSONException e) {
            e.printStackTrace();
        }






        try {
            url = new URL(endpoint +endpointExtra+ "banks/"+ bank+"/accounts/"+ account);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

        try {
            urlConnection = (HttpURLConnection) url.openConnection();
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            urlConnection.setRequestMethod("GET");
        } catch (ProtocolException e) {
            e.printStackTrace();
        }
        String directLoginAuth = "token=" + token;
        urlConnection.addRequestProperty("Authorization", "DirectLogin " + directLoginAuth);
        urlConnection.addRequestProperty("Content-Type", "application/json; charset=UTF-8");


        try {
            urlConnection.connect();
        } catch (IOException e) {
            e.printStackTrace();
        }

        result = "";
        try {
            String json_response = "";
            InputStreamReader in = new InputStreamReader(urlConnection.getInputStream());
            BufferedReader br = new BufferedReader(in);
            String text = "";
            while ((text = br.readLine()) != null) {
                json_response += text;
            }
            result = json_response.toString();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            urlConnection.disconnect();
        }

        jObject = null;
        try {
            jObject = new JSONObject(result);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        try {
            assert jObject != null;
            JSONArray jArray = jObject.getJSONArray("balance");
            String aJsonString = jArray.getJSONObject(0).getString("amount");
            balAmount.setText(aJsonString);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }



}
